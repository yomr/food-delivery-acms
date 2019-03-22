var sql = require('../controller/db.js');
var queries = require ('../controller/queries'); 
var menuUtils = require('../utility/menuUtils')
//Menu object constructor
var menu = function (res_id, items) {
    this.res_id = res_id;
    this.items = items;
};
menu.uploadMenu = function uploadMenu(menu, result) {

    var menuArray = menuUtils.getObjectArray(menu);

    console.log("dsadasdasdasdasd-----------", menuArray);
    console.log("dsadasdasdasdasd-----------", menu);

    sql.query(queries.uploadMenu, [menuArray], function (err, res) {
        if (err) {
            throw err;
        }
        else {
            result('Rows inserted', res);
        }
    });
};

module.exports = menu;
