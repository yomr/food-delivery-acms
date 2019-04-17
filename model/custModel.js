'use strict';
var sql = require('../controller/db.js');
var queries = require ('../controller/queries');
var Customer_Register = function(req,res){
    var test = req.body;

    this.firstname = test.firstname;
    this.lastname = test.lastname;
    this.contact = test.contact;
    this.email = test.email;
    this.pwd = test.pwd;
    this.user_id = test.user_id;
    this.address = test.address;
    this.city = test.city;

};
Customer_Register.createNewUser = function createUser(Customer_Register, result) {    
    var params=[Customer_Register.firstname,Customer_Register.lastname,Customer_Register.contact,Customer_Register.email,Customer_Register.pwd,Customer_Register.user_id,Customer_Register.address,Customer_Register.city];
        console.log(+params);
        sql.query(queries.postcust,params, function (err, res)
        {    
                if(err) 
                {
                    console.log("error: ", err);
                    result(err, null);
                }
                else
                {
                    console.log("1 record inserted");
                }
        });             
};
module.exports= Customer_Register;
