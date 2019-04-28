var register = require('../controller/regicontroller.js');
var dispMenu = require('../controller/menuController');
var getRest = require('../controller/restController');
var menu = require('../controller/uploadmenuController');
var login = require('../controller/logincontroller');
var dboyOrder = require('../controller/dboyController');
var restaurant = require('../controller/restaurantController');
var orderConfirmation = require('../controller/placeOrderController');
var feedback = require('../controller/ReviewController.js');
const router = app => {

  app.route('/restaurant-home').get(restaurant.home);
  app.route('/upload-item').get(restaurant.uploadItems);
  app.route('/edit-item').get(restaurant.editItems);
  app.route('/edit-menu-update').post(restaurant.editMenuUpdate);
  app.route('/delete-item').post(restaurant.deleteItem);
  app.route('/past-orders').get(restaurant.pastOrders);
  app.route('/current-orders').get(restaurant.currentOrders);
  app.route('/deny-order').post(restaurant.denyOrder);
  app.route('/accept-order').post(restaurant.acceptOrder);
  app.route('/getallRestaurants').get(getRest.userDetails);
  app.route('/getMenu').get(dispMenu.readMenu).post(dispMenu.orderPlaced);
  app.route('/upload-menu').post(menu.uploadMenu);
  app.route('/registeration').post(register.register_entity);
  app.route('/authorization').post(login.validate);
  app.route('/restaurant-home').get(restaurant.home);
  app.route('/upload-item').get(restaurant.uploadItems);
  app.route('/Review').post(feedback.Reviews);
  app.route('/').get(function(request, response){    
    response.render('index');  
  });
  app.route('/CustomerRegisteration').get(function(request, response){    
    response.render('CustomerRegisteration');
  });
  app.route('/RestaurantRegister').get(function(request, response){    
    response.render('RestaurantRegister');
  });
  app.route('/DeliveryBoyRegister').get(function(request, response){    
    response.render('DeliveryBoyRegister');
  });
  app.route('/Login').get(function(request, response){    
    response.render('Login');
  });
  app.route('/register').get(function(request, response){    
    response.render('register');
  });
  app.route('/dboyHome').get(dboyOrder.orderDetails).post(dboyOrder.deliveryUpdate);
  app.route('/orderStatus').get(orderConfirmation.orderStatus);
  app.route('/allOrders').get(getRest.allOrderDetails);
  app.route('/FeedbackReviews').get(function(request, response){   
    response.render('FeedbackReviews');
  });
}

module.exports=router;