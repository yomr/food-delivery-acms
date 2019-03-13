'use strict';
var sql = require('./db.js');

var Registerr = function(restaurant_register){
    this.restname = restaurant_register.restname;
    this.email = restaurant_register.email;
    this.password = restaurant_register.password;
    this.opening_time = restaurant_register.opening_time;
    this.closing_time = restaurant_register.closing_time;
    this.description = restaurant_register.description;
    this.rrating = restaurant_register.rrating;
    this.rid = restaurant_register.rid;
};

console.log("hi");
    Registerr.createNewRest = function createRest(Registerr, result) {    
        sql.query('INSERT INTO restaurant_register set ?', Registerr, function (err, res) {
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
       // module.exports= Registerr;
};
console.log("hi");
module.exports= Registerr;