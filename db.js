var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'food'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;