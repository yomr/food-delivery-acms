'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'princy',
    password : '12345',
    database : 'food'
});

connection.connect(function(err) {
    if (err) throw err;
     else{
     	console.log("connected");
     }
});

module.exports = connection;