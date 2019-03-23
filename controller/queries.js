
exports.postcust = "INSERT INTO Customer (firstname,lastname,contact,email,pwd,cust_id) VALUES (?,?,?,?,?,?)";
exports.postrest = "INSERT INTO Restaurant (name,email,pwd,open_time,close_time,description,rating,res_id,gst_no,res_type) VALUES (?,?,?,?,?,?,?,?,?,?)";
exports.postdboy = "INSERT INTO DeliveryBoy (firstname,lastname,contact,email,pwd,status,rating,vechile_no,licence_no,dboy_id) VALUES (?,?,?,?,?,?,?,?,?,?)";

exports.getMenu = "Select * from menu where res_id = ?";
exports.getRest = "Select * from restaurant";

exports.uploadMenu = "INSERT INTO menu (res_id, item_id, itemname, itemprice, itemcategory) VALUES ?";

