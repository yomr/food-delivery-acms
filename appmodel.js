
'use strict';
var sql = require('./db.js');

var Registeru = function(user_register){
    this.firstname = user_register.firstname;
    this.lastname = user_register.lastname;
    this.phone = user_register.phone;
    this.email = user_register.email;
    this.password = user_register.password;
    this.uid = user_register.uid;


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
