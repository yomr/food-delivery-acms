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

console.log("hi");
    Restaurant_Register.createNewRest = function createRest(Restaurant_Register, result) {    
        sql.query(queries.postrest, Restaurant_Register, function (err, res) {
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
module.exports= Restaurant_Register;