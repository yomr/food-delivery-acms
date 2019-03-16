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
module.exports = function (app) {
  var foodMenu = require('../controller/menuController');
  app.route('/getMenu').get(foodMenu.readMenu);
}
module.exports = function (app) {
  var menu = require('../controller/uploadmenuController');
  app.route('/upload-menu')
    .post(menu.uploadMenu);

};

