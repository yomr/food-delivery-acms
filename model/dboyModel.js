
'use strict';
var sql = require('../controller/db.js');
var queries = require ('../controller/queries');
var DeliveryBoy_Register = function(DeliveryBoy){
    var test = req.body;

    this.firstname = test.firstname;
    this.lastname = test.lastname;
    this.contact = test.contact;
    this.email = test.email;
    this.pwd = test.pwd;
    this.vehicle_no = test.vehicle_no;
    this.licence_no = test.licence_no;
    this.user_id = test.user_id;

 };
 DeliveryBoy_Register.createNewdboy = function createdboy(DeliveryBoy_Register, result) {    
    var params=[DeliveryBoy_Register.firstname,DeliveryBoy_Register.lastname,DeliveryBoy_Register.contact,DeliveryBoy_Register.email,DeliveryBoy_Register.pwd,DeliveryBoy_Register.vehicle_no,DeliveryBoy_Register.licence_no,DeliveryBoy_Register.user_id];
        console.log(+params);
        sql.query(queries.postdboy, params, function (err, res)
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
module.exports= DeliveryBoy_Register;
