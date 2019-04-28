'use strict';

var connection = require('./db.js');
var q= require('./queries');


exports.userDetails = function(req, res) 
{
	let cust_id = req.session.cust_id;
	connection.query(q.getRest +";"+ q.getUser,cust_id,function(error,rows,fields){

		if(error)
		{
			console.log(error);
		}
		else
		{
			console.log('Successful query');
			console.log(rows);
			res.render('user.ejs', { print:rows[0],user:rows[1]});
		}
	});
};

exports.allOrderDetails = function(req,res)
{
	let cust_id= req.session.cust_id;
	connection.query(q.getOrdersPerCust,cust_id, function(err,rows,fields) {
		if (err)
		{
			console.log(err);
		}
		else
		{
			res.redirect('/orderStatus');
		}
	});
};