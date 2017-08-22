#!/usr/bin/env node
"use strict";

/*
 * Credit: https://github.com/Microsoft/TypeScript-Node-Starter/blob/master/src/server.ts
*/

// Module dependencies.
import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as session from "express-session";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as lusca from "lusca";
import * as dotenv from "dotenv";
import * as mongo from "connect-mongo";
import * as flash from "express-flash";
import * as path from "path";
import * as mongoose from "mongoose";
//import * as passport from "passport";
import expressValidator = require("express-validator");

const MongoStore = mongo(session);
const apiRouter = require('./api/routes/api');

dotenv.config({ path: ".env" }); //todo - update

// API keys & Authentication
//import * as passportConfig from "./config/passport";

const app = express();

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);

mongoose.connection.on("error", () => {
	console.log("MongoDB connection error. Please make sure MongoDB is running.");
	process.exit();
});

//Express Config
app.set("port", process.env.PORT || 3000);

app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());

/*
 * bodyParser.urlencoded
 * A new body object containing the parsed data is populated on the request object
 * after the middleware (i.e. req.body). This object will contain key-value pairs,
 * where the value can be a string or array (when extended is false), or any type
 * (when extended is true).
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: process.env.SESSION_SECRET,
	store: new MongoStore({
		url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
		autoReconnect: true
	})
}));

// app.use(passport.initialize());
// app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use((req, res, next) => {
	res.locals.user = req.user;
	next();
});

app.use((req, res, next) => {

	// After successful login, redirect back to the intended page
	if (!req.user &&
			req.path !== "/login" &&
			req.path !== "/signup" &&
			!req.path.match(/^\/auth/) &&
			!req.path.match(/\./)) {
		req.session.returnTo = req.path;
	} else if (req.user &&
		req.path == "/account") {
		req.session.returnTo = req.path;
	}

	next();

});

app.use(express.static(path.join(__dirname, "/public/dist"), { maxAge: 31557600000 }));

//API Routes
app.use('/api', apiRouter);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

app.listen(app.get('port'), () => {
	console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
	console.log("  Press CTRL-C to stop\n");
});