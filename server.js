const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
port = process.env.PORT || 3000; // For the production deployment


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asdfg12345",
  database: "food_portal"
});

// connect to database
mc.connect(function (err) {
  if (err)
    throw err
  else {
    console.log('Connected to MySQL');
    // Start the app when connection is ready
    app.listen(port);
    console.log('Server listening');
    mc.query("SELECT * FROM menu", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

  }
});



console.log('API server started on: ' + port);

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/upload-menu'); //importing route
routes(app);