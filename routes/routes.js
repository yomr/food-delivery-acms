'use strict';
module.exports = function(app) {
  var register = require('../controller/regController.js');

  // registeration Routes
  app.route('/registeration')
   
    .post(register.register_a_user);
   
  app.route('/restroregistration')
    .post(register.register_a_restro);
  
  app.route('/dboyregistration')
    .post(register.register_a_dboy);
   
    };