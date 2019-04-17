'use strict';
var sql = require('../controller/db.js');
var queries = require ('../controller/queries');

var Restaurant_Register = function(req,res){
    var test = req.body;
    this.name = test.name;
    this.email = test.email;
    this.pwd = test.pwd;
    this.open_time = test.open_time;
    this.close_time = test.close_time;
    this.VegNonVeg = test.VegNonVeg;
    this.user_id = test.user_id;
    this.gst_no = test.gst_no;
    this.rest_type = test.rest_type;
    this.address= test.address;
    this.city= test.city;

};

Restaurant_Register.createNewRest = function createRest(Restaurant_Register, result) {    
    var params =[Restaurant_Register.name,Restaurant_Register.email,Restaurant_Register.pwd,Restaurant_Register.open_time,Restaurant_Register.close_time,Restaurant_Register.VegNonVeg,Restaurant_Register.user_id,Restaurant_Register.gst_no,Restaurant_Register.rest_type, Restaurant_Register.address,Restaurant_Register.city];
        sql.query(queries.postrest, params , function (err, res) {    
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
module.exports= Restaurant_Register;
