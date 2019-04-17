var Review_feedback = require('../model/ReviewModel.js');

exports.Reviews = function(req,res) {

  var entity = req.body;
  var order_id= req.session.order_id;

    Review_feedback.createNewFeedback(entity,order_id,function(err,order_id) {
      if(err)
      {
        res.send(err);
      }
      res.json(order_id);

    });
    
    res.redirect('/getallRestaurants');      
} 