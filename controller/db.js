var mysql = require('mysql');

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];
//local mysql db connection
var connection = mysql.createConnection ({ 
	host     : config.db.host,
	user     : config.db.user,
  password : config.db.password,
	database : config.db.database 
});

connection.connect(function(err) {
    if (err) 
    {
   		throw err;
    }
});

module.exports = connection;