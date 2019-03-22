
var Customer = require('../model/custModel.js');
var Restaurant = require('../model/restModel.js');
var DeliveryBoy = require('../model/dboyModel.js');
exports.register_entity = function(req,res) {
  var entity = req.body;
  if (entity.type === "customer") {
    Customer.createNewUser(entity,function(err,cust_id) {
      if(err)
        res.send(err);
      res.json(cust_id);
    });
  } else if (entity.type === "rest") {
          Restaurant.createNewRest(entity,function(err,res_id) {
              if(err)
                res.send(err);
              res.json(res_id);
            });
          }
          else if (entity.type === "dboy") {
                DeliveryBoy.createNewdboy(entity,function(err,dboy_id) {
                    if (err)
                      res.send(err);
                    res.json(dboy_id);
                });
              }
                else {
                  console.log("wrong choice");
                }
};