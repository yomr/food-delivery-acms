const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

const router = express.Router();
  var path = __dirname + '/views/';


  var env = process.env.NODE_ENV || 'development';
  var config = require('./controller/config')[env];
  app.listen(config.server.port);

  console.log('API server started ');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  router.get("/",function(req,res){
  res.sendFile(path + "displayrests.html");
});


app.use('/', router);

  var routes = require('./routes/routes.js'); //importing route
  routes(app); //register the route
