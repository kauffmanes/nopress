import * as express from 'express';
import { default as User } from '../../models/User';
import * as jwt from 'jsonwebtoken';

const Token = require('../util/token');

const userRouter = express.Router();

//when user clicks "login button"
userRouter.post('/users', (req, res) => {

	const user = new User();

	user.firstName = req.body.firstName;
	user.lastName = req.body.lastName;
	user.email = req.body.email;
	user.password = req.body.password;
	user.github = req.body.github;

	user.profile = {};
	user.profile.github = req.body.github;
	user.profile.location = req.body.location;
	user.profile.firstName = req.body.firstName;
	user.profile.lastName = req.body.lastName;
	user.profile.picture = req.body.picture;
	user.profile.website = req.body.website;

	user.save((err) => {
		if (err) { return res.status(400).send(err); }

		return User.findById(user._id, (err, user) => {
			res.status(201).json(user);
		});

	});

});

module.exports = userRouter;