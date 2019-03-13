
'use strict';
var sql = require('./db.js');

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
         //  module.exports= Registerd;           
};
console.log("hi");
module.exports= Registerd;
