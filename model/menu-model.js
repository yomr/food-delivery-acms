var sql = require('./db.js');

//Menu object constructor
var menu = function (menu) {
    this.rest_id = menu.rest_id;
    this.item_id = menu.item_id;
    this.item_name = menu.item_name;
    this.item_price = menu.item_price;
};
menu.uploadMenu = function uploadMenu(newMenu, result) {

    sql.query('INSERT INTO menu (rest_id, item_id, item_name, item_price) VALUES ?', [newMenu], function (err, res) {
        if (err) {
            throw err;
        }
        else {
            result('Rows inserted', res);
        }
    });
};

module.exports = menu;
