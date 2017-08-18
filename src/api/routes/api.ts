import * as express from 'express';
const router = express.Router();

//add more routes here

router.get('/', (req, res) => {
	res.send('API works');
});

module.exports = router;