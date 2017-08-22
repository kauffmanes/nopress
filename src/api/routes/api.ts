import * as express from 'express';
import { default as User } from '../../models/User';

const Token = require('../util/token');

const router = express.Router();
const loginRouter = require('./login');
const userRouter = require('./login');

router.use('/login', loginRouter);
router.use('/user', userRouter);

router.use((req, res, next) => {

	console.debug('hello visitor!');

	const token = req.headers['x-access-token'];

	//move to util lib
	if (token) {

		const decoded = Token.verify(token);

		if (!decoded) {
			return res.status(403).json({
				success: false,
				message: 'Failed to authenticate token'
			});
		}

		User.findById(decoded._id, (err, user: any) => {
			req.login = user;
			next();
		});

	} else {

		return res.status(403).json({
			success: false,
			message: 'No token provided'
		});

	}

});

//ping
router.get('/', (req, res) => {
	res.send('API works');
});

module.exports = router;