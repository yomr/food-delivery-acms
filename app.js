const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
port = process.env.PORT || 3000; // For the production deployment
app.listen(port);
console.log('API server started on: ' + port);

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/upload-menu'); //importing route
routes(app);