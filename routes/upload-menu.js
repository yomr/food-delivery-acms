module.exports = function (app) {
  var menu = require('../controllers/menu');

  app.route('/upload-menu')
    .post(menu.uploadMenu);

};