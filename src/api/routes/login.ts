import * as express from 'express';
import { default as User } from '../../models/User';
import * as jwt from 'jsonwebtoken';

const Token = require('../util/token');

const loginRouter = express.Router();

//when user clicks "login button"
loginRouter.post('/', (req, res) => {
	console.log('you tried to login!');
});

loginRouter.get('/login', (req, res) => {
	res.send('you tried to login');
});

module.exports = loginRouter;