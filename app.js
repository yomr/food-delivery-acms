const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;

const router = express.Router();
var path = __dirname + '/views/';

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get("/",function(req,res){
  res.sendFile(path + "displayrests.html");
});


app.use('/', router);


var routes = require('./routes/routes.js'); //importing route
routes(app); //register the route
