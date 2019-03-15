const express = require('express');
var app = express();

var env = process.env.NODE_ENV || 'development';
var config = require('./controller/config')[env];

app.listen(config.server.port, (error) => {
    if (error) 
    {
    	return console.log('Error: ${error}');
	}
    console.log('Server on');
});

var routes = require('./routes/routes'); //importing routes
routes(app);