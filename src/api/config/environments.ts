module.exports = {

	//local - needs to match dev's environment
	development: {
		database: {
			host: 'localhost',
			database: '<db_name>',
			user: 'root',
			password: 'password',
			debug: true
		},
		server: {
			host: 'localhost',
			port: '8080'
		}
	},

	production: {
		database: {
			host: 'localhost',
			database: '<db_name>',
			user: 'root',
			password: 'password',
			debug: true
		},
		server: {
			host: 'localhost',
			port: '8080'
		}
	}

};