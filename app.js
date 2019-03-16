const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

  	var env = process.env.NODE_ENV || 'development';
  	var config = require('./controller/config')[env];
	app.listen(config.server.port);
	console.log('API server started ');
app.use(bodyParser.json());

var routes = require('./routes/routes'); //importing route
routes(app);