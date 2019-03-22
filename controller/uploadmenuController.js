var Menu = require('../model/menuModel.js');

exports.uploadMenu = function (req, res) {

    var new_menu = new Menu(req.body.res_id, req.body.items);
    var err_exists = false;

    if (!new_menu.res_id) {
        err_exists = true;

        res.status(400).send({
            success: 'false',
            message: `restaurant id is required`
        });
    }
    for (var i = 0; i < new_menu.items.length; i++) {

        //handles null error 

        if (!new_menu.items[i].item_id) {
            err_exists = true;

            res.status(400).send({
                success: 'false',
                message: `itemId is of ${{ i }} required`
            });
        }
        if (!new_menu.items[i].itemname) {
            err_exists = true;

            res.status(400).send({
                success: 'false',
                message: `itemName is of ${{ i }} required`
            });
        }
        if (!new_menu.items[i].itemprice) {
            err_exists = true;

            res.status(400).send({
                success: 'false',
                message: `itemPrice is of ${{ i }} required`
            });
        }
        if (!new_menu.items[i].itemcategory) {
            err_exists = true;

            res.status(400).send({
                success: 'false',
                message: `itemcategory is of ${{ i }} required`
            });
        }




    }

    if (!err_exists) {
        Menu.uploadMenu(new_menu, function (err, menu) {
            if (err)
                res.send(err);
            console.log(menu);
        });
    }
};
