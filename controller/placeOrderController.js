var sql= require ('./db');
var queries = require ('./queries');

exports.orderStatus =  function (req,res){
	let cust_id= req.session.cust_id;
	let order_id = req.session.order_id;
	sql.query(queries.getOrderDetails,order_id, function (err, rows) {             
                if(err) {
                    res.send(err);
                }
                else{
                	if (rows[0].order_status === "Processing")
                	{
                		res.render('processing.ejs',{order:rows});
                	}  
                	else if (rows[0].order_status === "Confirmed")
                	{
                		sql.query(queries.checkDBoyAvailability,function(err,delboys) {
                			if(err) {
                				res.send(err);
                			}
                			else
                			{
                                if (delboys.length > 0) 
                                {
                                    console.log(delboys);
                				sql.query(queries.setOrderOnway+';'+queries.setDBoyBusy,[delboys[0].user_id,order_id,delboys[0].user_id], function(err,rows) {
                					sql.query(queries.getOrderDetails,order_id,function(err, rows) {
                					sql.query(queries.getDBoy,rows[0].dboy_id,function(err,delboys) {
                				        if(err) {
                				            res.send(err);
                				        }
                                         else {
                                                console.log(delboys);
                				                res.render('confirmed.ejs',{order:rows, da:delboys});
                                            }
                				        });
                				        });
                			         });
                				}
                                else
                                {
                                   sql.query(queries.getOrderDetails,order_id,function(err, rows) {
                                    if (err) {
                                        res.send(err);
                                    } 
                                    else 
                                    {
                                        res.render('confirmed.ejs',{order:rows, da:0});
                                    }
                                });
                               }
                                
                            }
            });}
                 	else if (rows[0].order_status === "On Way")
                	{
                		sql.query(queries.getOrderDetails,order_id,function(err, rows) {
                					sql.query(queries.getDBoy,rows[0].dboy_id,function(err,delboys) {
                				if(err) {
                				res.send(err);
                				}
                				res.render('confirmed.ejs',{order:rows, da:delboys});
                				});
                				});
                	}  
                    else if (rows[0].order_status === "Denied")
                    {
                        sql.query(queries.setOrderDenied,order_id, function(err,rows) {
                                if (err) {
                                    res.send(err);
                                }
                                else{
                                    res.render('denied.ejs',{order:order_id});
                                }
                        });
                    }
                	else if (rows[0].order_status === "Delivered")
                	{
                		sql.query(queries.getOrderDetails,order_id,function(err, rows) {
                					sql.query(queries.getDBoy,rows[0].dboy_id,function(err,delboys) {
                				if(err) {
                				res.send(err);
                				}
                				res.render('delivered.ejs',{order:rows, da:delboys});
                				});
                				});
                	}  
                    }
            });
            };