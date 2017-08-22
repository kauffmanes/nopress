import * as jwt from 'jsonwebtoken';

const secret = process.env.SESSION_SECRET;

const tokenUtil = {

	sign: (userData: any, extra: any) => {
		return jwt.sign(userData, secret, extra);
	},

	verify: (token: any) => {
		try {
			return jwt.verify(token, secret);
		} catch (err) {
			console.log(err);
		}
	}

};

module.exports = tokenUtil;