
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
        var params=[DeliveryBoy_Register.firstname,DeliveryBoy_Register.lastname,DeliveryBoy_Register.contact,DeliveryBoy_Register.email,DeliveryBoy_Register.pwd,DeliveryBoy_Register.status,DeliveryBoy_Register.rating,DeliveryBoy_Register.vechile_no,DeliveryBoy_Register.licence_no,DeliveryBoy_Register.dboy_id];
        sql.query(queries.postdboy, params, function (err, res) {
                if(err) {
                    console.log("error");
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null,res.insertId);
                    console.log("1 record inserted");
                }
            });       
};
module.exports= DeliveryBoy_Register;
