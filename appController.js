'use strict';

//var Task = require('../model/appModel.js');
var connection = require('./db.js');


exports.list_all_rest = function(req, res) {
 // app.get('/',function(req,resp){
	connection.query("SELECT * FROM RESTAURANTS",function(error,rows,fields){
		if(!!error)
		{
			console.log('Error in query');
		}
		else
		{
			console.log('Successful query');
			console.log(rows);
			res.send(rows);
		}
	});
};



