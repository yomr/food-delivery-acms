var sql= require ('./db');
var queries = require ('./queries'); // consolidated file for all mysql queries used in the project

//get Menu 
exports.readMenu = function(req, res) {
        let res_id = req.query.res_id;
        let cust_id = req.session.cust_id;
        sql.query(queries.getMenu,res_id, function (err, rows) {             
                if(err) {
                    res.send(err);
                }
                else{
                	sql.query(queries.getRestname, res_id, function(err,ans){
                    	res.render('menu.ejs',{print:rows, resname:ans, customer: cust_id});
                	});
              
                }
            });   
};

exports.orderPlaced = function(req,res) {
    let cust_id= req.session.cust_id;
    let res_id = req.query.res_id;
    let cart=req.body.cartcontent;
    let cartlen=cart.length;
    console.log("heyy "+cartlen);
    console.log(cust_id);
    console.log(res_id);
    sql.query('INSERT INTO order_details (res_id,cust_id,order_status,amount) values (?,?,?,?)',[res_id,cust_id,'Processing',0], function (err, rows) {             
                if(err) {
                    res.send(err);
                }
                else{ 
                    console.log("Hello");
                    sql.query('select order_id from order_details where res_id LIKE ? AND cust_id LIKE ? AND order_status LIKE ?',[res_id, cust_id,'Processing'], function (err, rows) {             
                if(err) {
                   res.send(err);
                }

                else{
                    //var cart=request.cartcontent;
                    console.log("Hello from the other side");
                    req.session.order_id=rows[0].order_id;
                    var cartInfo= [];
                    for(var i=0; i<cart.length; i++)
                    {
                      cartInfo.push([rows[0].order_id,cart[i].itemname,cart[i].price, cart[i].qty,cart[i].tval]);
                    }
                    console.log(cartInfo);
                    sql.query('INSERT INTO cart (orderid,itemname,price,quantity,totalvalue) VALUES ?',[cartInfo],function(err,result){
                        if(err){
                            res.send(err);
                        }
                        else
                        {
                            res.redirect('/orderStatus');   
                            console.log("redirecting..");        
                        }
                });
                }
                });
                }
            });
};