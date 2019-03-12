var Menu = require('../model/menu-model.js');

exports.uploadMenu = function (req, res) {

    var jsondata = req.body;
    var new_menus = [];
    var checkError = false;

    for (var i = 0; i < jsondata.length; i++) {

        //handles null error 
        if (!jsondata[i].rest_id) {
            checkError = true;
            res.status(400).send({
                success: 'false',
                message: `restaurant id of ${{ i }} is required`
            });
        } else if (!jsondata[i].item_id) {
            checkError = true;
            res.status(400).send({
                success: 'false',
                message: `itemId is of ${{ i }} required`
            });
        } else if (!jsondata[i].item_name) {
            checkError = true;
            res.status(400).send({
                success: 'false',
                message: `itemName is of ${{ i }} required`
            });
        } else if (!jsondata[i].item_price) {
            checkError = true;
            res.status(400).send({
                success: 'false',
                message: `itemPrice is of ${{ i }} required`
            });
        } else {
            new_menus.push([jsondata[i].rest_id, jsondata[i].item_id, jsondata[i].item_name, jsondata[i].item_price]);
        }
    }

    if (!checkError) {
        Menu.uploadMenu(new_menus, function (err, menu, jsondata) {
            if (err)
                res.send(err);
            console.log(menu);
        });
    }
};
