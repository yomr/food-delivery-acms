var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asdfg12345",
    database: "food_portal"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
