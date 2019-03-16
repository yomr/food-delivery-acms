module.exports = function (app) {
  var menu = require('../controller/uploadmenuController');

  app.route('/upload-menu')
    .post(menu.uploadMenu);

};