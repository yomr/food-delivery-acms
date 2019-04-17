var Customer = require('../model/custModel.js');
var Restaurant = require('../model/restModel.js');
var DeliveryBoy = require('../model/dboyModel.js');
exports.register_entity = function(req,res) {
  var entity = req.body;
  if (entity.type === "Customer") {
    Customer.createNewUser(entity,function(err,user_id) {
      if(err)
      {
        res.send(err);
      }
      res.json(user_id);

    });

  } 
  else 
  {
    if (entity.type === "Restaurant")
     {
        Restaurant.createNewRest(entity,function(err,user_id) {
          if(err)
          {
            res.send(err);
          }
          res.json(user_id);
          
        });
      }
    else 
    {
      if (entity.type === "DeliveryBoy") 
      {
        DeliveryBoy.createNewdboy(entity,function(err,user_id) {
          if (err)
          {
            res.send(err);
          }
          res.json(user_id);
        });
      }
      else 
      {
        res.send('Enter Valid type of User');
      }
    }
  }
  res.render('../views/Login');
};