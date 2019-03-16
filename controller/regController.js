
'use strict';

var Customer = require('../model/custModel.js');
var Restaurant = require('../model/restModel.js');
var DeliveryBoy = require('../model/dboyModel.js');
exports.register_a_user = function(req, res) {
  var new_cust = new Customer(req.body);

  if(!new_cust.firstname){

            res.status(400).send({ error:true, message: 'Please provide firstname/u' });

        }
  else{
  
            Customer.createNewUser(new_cust, function(err, cust_id) {
    
            if (err)
              res.send(err);
            res.json(cust_id);
  });
}
};

exports.register_a_restro = function(req, res) {
  var new_rest = new Restaurant(req.body);
  if(!new_rest.name){

            res.status(400).send({ error:true, message: 'Please provide restname/u' });

        }
  else{
  
            Restaurant.createNewRest(new_rest, function(err, res_id) {
    
            if (err)
              res.send(err);
            res.json(res_id);
  });
}
};
exports.register_a_dboy = function(req, res) {
  var new_dboy = new DeliveryBoy(req.body);
  if(!new_dboy.firstname){

            res.status(400).send({ error:true, message: 'Please provide firstname/u' });

        }
  else{
  
            DeliveryBoy.createNewdboy(new_dboy, function(err, dboy_id) {
    
            if (err)
              res.send(err);
            res.json(dboy_id);
  });
}
};