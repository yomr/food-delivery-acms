exports.getObjectArray = function (new_menu, count) {
    var new_menus = [];
      

        if (Array.isArray(new_menu.items.itemname)) {
            for(var i =0; i <new_menu.items.itemname.length;i++){
                count++;
                console.log(new_menu);
                new_menus.push([new_menu.res_id, count, new_menu.items.itemname[i], new_menu.items.itemcategory[i], new_menu.items.itemprice[i]]);
            }
        } else {
            new_menus.push([new_menu.res_id, ++count, new_menu.items.itemname, new_menu.items.itemcategory, new_menu.items.itemprice]);
        }
       
    
    return new_menus;
}