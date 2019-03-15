var sql = require('./db.js');

//Menu object constructor
var menu = function (menu) {
    this.res_id = menu.res_id;
    this.item_id = menu.item_id;
    this.itemname = menu.itemname;
    this.itemprice = menu.itemprice;
    this.itemcategory = menu.itemcategory;
};
menu.uploadMenu = function uploadMenu(newMenu, result) {

    sql.query('INSERT INTO menu (res_id, item_id, itemname, itemprice, itemcategory) VALUES ?', [newMenu], function (err, res) {
        if (err) {
            throw err;
        }
        else {
            result('Rows inserted', res);
        }
    });
};

module.exports = menu;
