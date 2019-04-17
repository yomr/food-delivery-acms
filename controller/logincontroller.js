'use strict';
var sql = require('./db.js');
var queries = require ('./queries');

exports.validate=  function(request, response) {
	var user_id = request.body.user_id;
	var pwd = request.body.pwd;
	var type = request.body.type;
	if (user_id && pwd) {
		if(type==="Customer")
		{
		 	sql.query(queries.postlogincust, [user_id, pwd], function(error, results) {
				if (results.length > 0) {
					request.session['cust_id'] = user_id;
					response.redirect('/getallRestaurants');
				} 
				else 
				{
				response.send('Incorrect Username and/or Password!');
				}			
				response.end();
			});
		} 
		else 
		{
			if (type ==="DeliveryBoy")
			{
				sql.query(queries.postlogindboy, [user_id, pwd], function(error, results) {
					if (results.length > 0) {
						request.session['dboy_id'] = user_id;
						response.redirect('/dboyHome');
					} 
					else 
					{
						response.send('Incorrect Username and/or Password!');
					}			
					response.end();
				});
			} 
			else
			{
				if(type==="Restaurant") 
				{

					sql.query(queries.postloginrest, [user_id, pwd], function(error, results) {
						if (results.length > 0)
						 {
							request.session['res_id'] = user_id;
							response.redirect('/restaurant-home');
						}
						else 
						{
							response.send('Incorrect Username and/or Password!');
						}			
						response.end();
					});
				} 

			}
		}
	}
	else 
	{
		response.send('Please enter Username and Password!');
		response.end();
	}
};