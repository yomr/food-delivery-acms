var Menu = require('../model/menu-model.js');

exports.uploadMenu = function (req, res) {

    var jsondata = req.body;
    var new_menus = [];
    var err_exists = false;

    for (var i = 0; i < jsondata.length; i++) {

        //handles null error 
        if (!jsondata[i].res_id) {
            err_exists = false;
            
            res.status(400).send({
                success: 'false',
                message: `restaurant id of ${{ i }} is required`
            });
        }
        if (!jsondata[i].item_id) {
            err_exists = false;
            
            res.status(400).send({
                success: 'false',
                message: `itemId is of ${{ i }} required`
            });
        }
        if (!jsondata[i].itemname) {
            err_exists = false;
            
            res.status(400).send({
                success: 'false',
                message: `itemName is of ${{ i }} required`
            });
        }
        if (!jsondata[i].itemprice) {
            err_exists = false;
            
            res.status(400).send({
                success: 'false',
                message: `itemPrice is of ${{ i }} required`
            });
        }
        if (!jsondata[i].itemcategory) {
           err_exists = false;
            
            res.status(400).send({
                success: 'false',
                message: `itemcategory is of ${{ i }} required`
            });
        }


        new_menus.push([jsondata[i].res_id, jsondata[i].item_id, jsondata[i].itemname, jsondata[i].itemprice, jsondata[i].itemcategory]);

    }

    if (!err_exists) {
        Menu.uploadMenu(new_menus, function (err, menu, jsondata) {
            if (err)
                res.send(err);
            console.log(menu);
        });
    }
};
