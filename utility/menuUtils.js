exports.getObjectArray = function (new_menu) {
    var new_menus = [];
    for (var i = 0; i < new_menu.items.length; i++) {
        new_menus.push([new_menu.res_id, new_menu.items[i].item_id, new_menu.items[i].itemname, new_menu.items[i].itemprice, new_menu.items[i].itemcategory]);
    }
    
    return new_menus;
}