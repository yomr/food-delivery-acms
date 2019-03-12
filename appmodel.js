
'use strict';
var sql = require('./db.js');

//Task object constructor
var Registeru = function(user_register){
    this.firstname = user_register.firstname;
    this.lastname = user_register.lastname;
    this.phone = user_register.phone;
    this.email = user_register.email;
    this.password = user_register.password;
    this.uid = user_register.uid;
    //this.restname = restaurant_register.restname;
    //this.remail = restaurant_register.email;
    //this.rpassword = restaurant_register.password;
    //this.opening_time = restaurant_register.opening_time;
    //this.closing_time = restaurant_register.closing_time;
    //this.description = restaurant_register.description;
    //this.rrating = restaurant_register.rrating;
    //this.rid = restaurant_register.rid;
    //this.dfirstname = delivery_register.firstname;
    //this.dlastname = delivery_register.lastname;
    //this.dphone = delivery_register.phone;
    //this.demail = delivery_register.email;
    //this.dpassword = delivery_register.password;
    //this.dstatus = delivery_register.dstatus;
    //this.drating = delivery_register.drating;
    //this.vechile_no = delivery_register.vechile_no;
    //this.driving_licence = delivery_register.driving_licence;
    //this.did = delivery_register.did;

};
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
var Registerd = function(delivery_register){
    this.firstname = delivery_register.firstname;
    this.lastname = delivery_register.lastname;
    this.phone = delivery_register.phone;
    this.email = delivery_register.email;
    this.password = delivery_register.password;
    this.dstatus = delivery_register.dstatus;
    this.drating = delivery_register.drating;
    this.vechile_no = delivery_register.vechile_no;
    this.driving_licence = delivery_register.driving_licence;
    this.did = delivery_register.did;

 };
console.log("hi");
Registeru.createNewUser = function createUser(Registeru, result) {    
        sql.query('INSERT INTO user_register set ?', Registeru, function (err, res) {
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
module.exports= Registeru;

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
        //module.exports= Registerr;
};
//console.log("hi");
module.exports= Registerr;
Registerd.createNewdboy = function createdboy(Registerd, result) {    
        sql.query('INSERT INTO delivery_register set ?', Registerd, function (err, res) {
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
//            module.exports= Registerd;           
};
console.log("hi");
module.exports= Registerd;