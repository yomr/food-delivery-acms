
'use strict';

var Register = require('../model/appmodel.js');

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
  var new_rest = new Register(req.body);
//var new_user=Register();
//console.log(new_user);

if(!new_rest.rid){

            res.status(400).send({ error:true, message: 'Please provide restname/u' });

        }
else{
  
  Register.createNewRest(new_rest, function(err, rid) {
    
    if (err)
      res.send(err);
    res.json(rid);
  });
}
};
exports.register_a_dboy = function(req, res) {
  var new_dboy = new Register(req.body);
//var new_user=Register();
//console.log(new_user);

if(!new_dboy.firstname){

            res.status(400).send({ error:true, message: 'Please provide firstname/u' });

        }
else{
  
  Register.createNewdboy(new_dboy, function(err, did) {
    
    if (err)
      res.send(err);
    res.json(did);
  });
}
};