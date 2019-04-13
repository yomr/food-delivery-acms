var Menu = require('../model/menuModel.js');
var sql = require('../controller/db.js');
var queries = require ('../controller/queries'); 
var menuUtils = require('../utility/menuUtils')

exports.uploadMenu = function (req, res) {

    let res_id = req.session.res_id;

    var new_menu = new Menu(res_id, req.body);
    var err_exists = false;

    if (!new_menu.items.itemname) {
        err_exists = true;

        res.status(400).send({
            success: 'false',
            message: `itemName is required`
        });
    }
    if (!new_menu.items.itemprice) {
        err_exists = true;

        res.status(400).send({
            success: 'false',
            message: `itemPrice is  required`
        });
    }
    if (!new_menu.items.itemcategory) {
        err_exists = true;

        res.status(400).send({
            success: 'false',
            message: `itemcategory is required`
        });
    }

    if (!err_exists) {

        sql.query(queries.getMaxItemID, res_id, function(err, count) {
            if (err) {
                throw err;
            }
            else {
                var menuArray = menuUtils.getObjectArray(new_menu, count[0].item_count);
                sql.query(queries.uploadMenu, [menuArray], function (err, data) {
                    if (err) {
                        throw err;
                    }
                    else {
                        req.session['res_id'] = new_menu.res_id;
                        res.redirect('/restaurant-home'); 
                    }
                });
            }
        });
    }


};
