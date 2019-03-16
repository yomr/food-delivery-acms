module.exports = function (app) {
  var foodMenu = require('../controller/menuController');
  app.route('/getMenu').get(foodMenu.readMenu);
}
module.exports = function (app) {
  var menu = require('../controller/uploadmenuController');
  app.route('/upload-menu')
    .post(menu.uploadMenu);

};
