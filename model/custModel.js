
'use strict';
var sql = require('../controller/db.js');
var queries = require ('../controller/queries');
var Customer_Register = function(Customer){
    this.firstname = Customer.firstname;
    this.lastname = Customer.lastname;
    this.contact = Customer.contact;
    this.email = Customer.email;
    this.pwd = Customer.pwd;
    this.cust_id = Customer.cust_id;


};
Customer_Register.createNewUser = function createUser(Customer_Register, result) {    
        sql.query(queries.postcust, Customer_Register, function (err, res) {
         console.log("works");     
                if(err) {
                    console.log("error");
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("err");
                    //console.log(res.insertId);
                    result(null,res.insertId);
                    console.log("1 record inserted");
                }
            });             
    };
module.exports= Customer_Register;
