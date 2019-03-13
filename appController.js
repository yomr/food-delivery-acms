
'use strict';

var Register = require('../model/appmodel.js');
var Registerr = require('../model/appmodelr.js');
var Registerd = require('../model/appmodeld.js');
exports.register_a_user = function(req, res) {
  var new_user = new Register(req.body);
//var new_user=Register();
//console.log(new_user);

if(!new_user.firstname){

            res.status(400).send({ error:true, message: 'Please provide firstname/u' });

        }
else{
  
  Register.createNewUser(new_user, function(err, uid) {
    
    if (err)
      res.send(err);
    res.json(uid);
  });
}
};
exports.register_a_restro = function(req, res) {
  var new_rest = new Registerr(req.body);
//var new_user=Register();
//console.log(new_user);
//console.log(new_rest);
if(!new_rest.restname){

            res.status(400).send({ error:true, message: 'Please provide restname/u' });

        }
else{
  
  Registerr.createNewRest(new_rest, function(err, rid) {
    
    if (err)
      res.send(err);
    res.json(rid);
  });
}
};
exports.register_a_dboy = function(req, res) {
  var new_dboy = new Registerd(req.body);
//var new_user=Register();
//console.log(new_user);

if(!new_dboy.firstname){

            res.status(400).send({ error:true, message: 'Please provide firstname/u' });

        }
else{
  
  Registerd.createNewdboy(new_dboy, function(err, did) {
    
    if (err)
      res.send(err);
    res.json(did);
  });
}
};