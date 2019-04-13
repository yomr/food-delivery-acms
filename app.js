const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

var session = require('express-session');
var server = require('http').createServer(app);
//exports.io = require('socket.io')(server);

app.set('view engine', 'ejs');

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);

const router = express.Router();
var path = __dirname + '/views/';


var env = process.env.NODE_ENV || 'development';
var config = require('./controller/config')[env];
server.listen(config.server.port);

console.log('API server started ');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({secret: 'ssshhhhh'}));
app.use(express.static(__dirname + '/public'));


app.use('/', router);

var routes = require('./routes/routes.js'); //importing route
routes(app); //register the route
