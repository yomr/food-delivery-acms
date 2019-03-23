var register = require('../controller/regicontroller.js');
var dispMenu = require('../controller/menuController');
var getRest = require('../controller/restController');
var menu = require('../controller/uploadmenuController');

const router = app => {
    
  app.route('/getallRestaurants').get(getRest.listAllRest);
  app.route('/getMenu').get(dispMenu.readMenu);
  app.route('/upload-menu').post(menu.uploadMenu);
  app.route('/registeration').post(register.register_entity);
}

module.exports=router;