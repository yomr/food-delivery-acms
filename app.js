const express = require('express'),
  app = express();
var port = 4000;

app.listen(port, (error) => {
    if (error) return console.log('Error: ${error}');

    console.log('Server on');
});

var routes = require('./routes/routes'); //importing route
routes(app);