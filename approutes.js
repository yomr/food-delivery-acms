'use strict';
module.exports = function(app) {
  var register = require('../controller/appController.js');

  // todoList Routes
  app.route('/registeration')
    //.get(todoList.list_all_tasks)
    .post(register.register_a_user);
   
  app.route('/restroregistration')
    .post(register.register_a_restro);
    //.get(todoList.read_a_task)
    //.put(todoList.update_a_task)
  app.route('/dboyregistration')
    .post(register.register_a_dboy);
    //.delete(todoList.delete_a_task);
    };