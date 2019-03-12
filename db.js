'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'megha1996',
    database : 'foodie'
});

connection.connect(function(err) {
    if (err) 

    console.log("Error");

    else
	{
		console.log('Connected');
	}
	
});

module.exports = connection;


