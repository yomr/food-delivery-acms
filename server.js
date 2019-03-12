const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;

const router = express.Router();
var path = __dirname + '/views/';



const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'megha1996',
    database: 'foodie'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//  res.sendFile(path.join(__dirname+'/displayrests.html'));
  //__dirname : It will resolve to your project folder.
//});

router.get("/",function(req,res){
  res.sendFile(path + "displayrests.html");
});


app.use('/', router);


var routes = require('./routes/appRoutes.js'); //importing route
routes(app); //register the route
//app.use(express.static(__dirname + '/displayrests.html));
