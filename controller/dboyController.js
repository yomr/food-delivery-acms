var sql= require ('./db');
var queries = require ('./queries'); // consolidated file for all mysql queries used in the project

//get Order details
exports.orderDetails = function(req, res) {
        let dboy_id = req.session.dboy_id;
        sql.query(queries.getDBoy+";"+queries.getOrderRes+";"+queries.getOrderCust,[dboy_id, dboy_id,dboy_id], function (err, rows) {             
                if(err) {
                    res.send(err);
                }
                else{
                    res.render('dboyHome.ejs',{dboy_order:rows});           
                }
            });   
};

exports.deliveryUpdate = function(req,res)	{
	let dboy_id= req.session.dboy_id;
	sql.query(queries.updateDBoyStatus+';'+queries.updateOrderStatus,[dboy_id,dboy_id], function (err, rows) {             
                if(err) {
                    res.send(err);
                }
                else{
                	sql.query(queries.getDBoy+";"+queries.getOrderRes+";"+queries.getOrderCust,[dboy_id, dboy_id,dboy_id], function (err, rows) {             
                if(err) {
                    res.send(err);
                }
                else{
                    res.render('dboyHome.ejs',{dboy_order:rows});           
                }
            }); 
            }
});
};