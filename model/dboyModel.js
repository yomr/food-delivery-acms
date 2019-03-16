
'use strict';
var sql = require('../controller/db.js');
var queries = require ('../controller/queries');
var DeliveryBoy_Register = function(DeliveryBoy){
    this.firstname = DeliveryBoy.firstname;
    this.lastname = DeliveryBoy.lastname;
    this.contact = DeliveryBoy.contact;
    this.email = DeliveryBoy.email;
    this.pwd = DeliveryBoy.pwd;
    this.status = DeliveryBoy.status;
    this.rating = DeliveryBoy.rating;
    this.vechile_no = DeliveryBoy.vechile_no;
    this.licence_no = DeliveryBoy.licence_no;
    this.dboy_id = DeliveryBoy.dboy_id;

 };
 DeliveryBoy_Register.createNewdboy = function createdboy(DeliveryBoy_Register, result) {    
        sql.query(queries.postdboy, DeliveryBoy_Register, function (err, res) {
         console.log("works");     
                if(err) {
                    console.log("error");
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("err");
                    result(null,res.insertId);
                    console.log("1 record inserted");
                }
            });       
};
console.log("hi");
module.exports= DeliveryBoy_Register;
