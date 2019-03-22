'use strict';
var sql = require('../controller/db.js');
var queries = require ('../controller/queries');

var Restaurant_Register = function(Restaurant){
    this.name = Restaurant.name;
    this.email = Restaurant.email;
    this.pwd = Restaurant.pwd;
    this.open_time = Restaurant.open_time;
    this.close_time = Restaurant.close_time;
    this.description = Restaurant.description;
    this.rating = Restaurant.rating;
    this.res_id = Restaurant.res_id;
    this.gst_no = Restaurant.gst_no;
    this.res_type = Restaurant.res_type;

};

    Restaurant_Register.createNewRest = function createRest(Restaurant_Register, result) {    
        var params =[Restaurant_Register.name,Restaurant_Register.email,Restaurant_Register.pwd,Restaurant_Register.open_time,Restaurant_Register.close_time,Restaurant_Register.description,Restaurant_Register.rating,Restaurant_Register.res_id,Restaurant_Register.gst_no,Restaurant_Register.res_type];
        sql.query(queries.postrest, params , function (err, res) {    
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
module.exports= Restaurant_Register;