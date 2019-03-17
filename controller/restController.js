'use strict';

var connection = require('./db.js');
var q= require('./queries');


exports.listAllRest = function(req, res) 
{
 
	connection.query(q.getRest,function(error,rows,fields){
		if(error)
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



