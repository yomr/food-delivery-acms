var sql = require('./db');
var queries = require('./queries');
var menu = require('./menuController');
var app = require('../app');

//get Menu 
exports.home = function (req, res) {
    let res_id = req.session.res_id;

    sql.query(queries.getMenu, res_id, function (err, rows) {
        if (err) {
            res.send(err);
        }
        else {
            req.session['res_id'] = res_id;
            Promise.all(getRestaurantData(res_id)).then(function (results) {
                res.render('pages/restaurant-common', {
                    items: rows,
                    res_id: res_id,
                    layout: 'home',
                    restaurant_name: results[0].name,
                    rating: results[0].rating,
                    total_orders: results[1].order_count,
                    address: results[0].address
                });
            }).catch(function (err) {
                console.log("Promise rejection error: " + err);
            });
        }
    });
};

getRestaurantData = function (res_id) {
    var result = [];
    result.push(new Promise(function (resolve, reject) {
        sql.query(queries.getRestName, res_id, function (err, rows) {
            if (rows === undefined)
                reject(new Error("Cannot fetch Restaurant Name"));
            else
                resolve(rows[0]);
        });
    }));
    result.push(new Promise(function (resolve, reject) {
        sql.query("SELECT COUNT(*) AS order_count FROM order_details where res_id = ?", res_id, function (err, rows) {
            if (rows === undefined)
                reject(new Error("Cannot fetch Count"));
            else
                resolve(rows[0]);
        });
    }));
    return result;
};

exports.uploadItems = function (req, res) {
    res.render('pages/edit-items');
};

exports.editItems = function (req, res) {
    let res_id = req.session.res_id;
    sql.query(queries.getMenu, res_id, function (err, rows) {
        if (err) {
            res.send(err);
        }
        else {
            req.session['res_id'] = res_id;
            Promise.all(getRestaurantData(res_id)).then(function (results) {
                res.render('pages/restaurant-common', {
                    items: rows,
                    res_id: res_id,
                    layout: 'edit-items',
                    restaurant_name: results[0].name,
                    rating: results[0].rating,
                    total_orders: results[1].order_count,
                    address: results[0].address
                });
            }).catch(function (err) {
                console.log("Promise rejection error: " + err);
            });
        }
    });
};

exports.editMenuUpdate = function (req, res) {
    let res_id = req.session.res_id;
    var data = req.body;
    var params = [data.itemname, data.itemprice, data.itemcategory, data.item_id];

    sql.query(queries.updateMenuItem, params, function (err, rows) {
        if (err) {
            res.send(err);
        }
        else {
            req.session['res_id'] = res_id;
            res.redirect('/edit-item');
        }
    });
};

exports.deleteItem = function (req, res) {
    let res_id = req.session.res_id;
    var item_id = req.body.item_id;

    sql.query(queries.deleteItem, item_id, function (err, rows) {
        if (err) {
            res.send(err);
        }
        else {
            req.session['res_id'] = res_id;
            res.redirect('/edit-item');
        }
    });
};

exports.denyOrder = function (req, res) {
    let res_id = req.session.res_id;
    var order_id = req.body.order_id;
    sql.query(queries.denyOrder, order_id, function (err, rows) {
        if (err) {
            res.send(err);
        }
        else {
            req.session['res_id'] = res_id;
            res.redirect('/current-orders');
        }
    });
};

exports.acceptOrder = function (req, res) {
    console.log("HI");
    let res_id = req.session.res_id;
    var order_id = req.body.order_id;
    console.log("HI",res_id);
    console.log("HI",order_id);

    sql.query(queries.acceptOrder, order_id, function (err, rows) {
        if (err) {
            res.send(err);
        }
        else {
            req.session['res_id'] = res_id;
            res.redirect('/current-orders');
        }
    });
};

exports.pastOrders = function (req, res) {
    let res_id = req.session.res_id;

    sql.query(queries.getPastOrders, res_id, function (err, rows) {
        if (err) {
            res.send(err);
        }
        else {
            var order_id = [];
            var amount = [];
            var dboy_id = [];
            var cust_id = [];

            for (let i = 0; i < rows.length; i++) {
                order_id[i] = rows[i].order_id;
                amount[i] = rows[i].amount;
                dboy_id[i] = rows[i].dboy_id;
                cust_id[i] = rows[i].cust_id;
            }
            req.session['res_id'] = res_id;

            var restaurantDetails = getRestaurantData(res_id);

            var ordersDetails = getOrderDetails(order_id, dboy_id, cust_id, true);


            var details = restaurantDetails.concat(ordersDetails);

            Promise.all(details).then(function (results) {
                res.render('pages/restaurant-common', {
                    order_id: order_id,
                    res_id: res_id,
                    layout: 'past-orders',
                    amount: amount,
                    rating: results[0].rating,
                    restaurant_name: results[0].name,
                    total_orders: results[1].order_count,
                    address: results[0].address,
                    results: results
                });
            }).catch(function (err) {
                console.log("Promise rejection error: " + err);
            });
        }
    });
};

exports.currentOrders = function (req, res) {
    let res_id = req.session.res_id;


    sql.query(queries.getCurrentOrders, res_id, function (err, rows) {
        if (err) {
            res.send(err);
        }
        else {
            var order_id = [];
            var amount = [];
            var cust_id = [];
            var order_status = [];
            var dboy_id = [];

            for (let i = 0; i < rows.length; i++) {
                order_id[i] = rows[i].order_id;
                amount[i] = rows[i].amount;
                order_status[i] = rows[i].order_status;
                cust_id[i] = rows[i].cust_id;
                dboy_id[i] = rows[i].dboy_id;
            }
            req.session['res_id'] = res_id;

            var restaurantDetails = getRestaurantData(res_id);

            var ordersDetails = getOrderDetails(order_id, dboy_id, cust_id, false);


            var details = restaurantDetails.concat(ordersDetails);

            Promise.all(details).then(function (results) {
                res.render('pages/restaurant-common', {
                    order_id: order_id,
                    res_id: res_id,
                    layout: 'current-orders',
                    amount: amount,
                    order_status: order_status,
                    rating: results[0].rating,
                    restaurant_name: results[0].name,
                    total_orders: results[1].order_count,
                    address: results[0].address,
                    results: results
                });
            }).catch(function (err) {
                console.log("Promise rejection error: " + err);
            });
        }
    });
}

getOrderDetails = function (order_id, dboy_id, cust_id, boolean_variable) {
    var result = [];

    if (boolean_variable) {
        for (var i = 0; i < dboy_id.length; i++) {
            tempVal = dboy_id[i];
            (function (val) {
                result.push(new Promise(function (resolve, reject) {
                    sql.query("select * from deliveryboy where user_id = ?", val, function (err, rows) {
                        if (rows === undefined)
                            reject(new Error("Cannot fetch Delivery Name"));
                        else {
                            var name = rows[0].firstname + " " + rows[0].lastname;
                            resolve(name);
                        }
                    });
                }));
            })(tempVal);
        }
    }

    for (var i = 0; i < cust_id.length; i++) {
        tempVal = cust_id[i];
        (function (val) {
            result.push(new Promise(function (resolve, reject) {
                sql.query("select * from customer where user_id = ?", val, function (err, rows) {
                    if (rows === undefined)
                        reject(new Error("Cannot fetch Customer Name"));
                    else {
                        var name = rows[0].firstname + " " + rows[0].lastname;
                        resolve(name);
                    }
                });
            }));
        })(tempVal);
    }

    for (var i = 0; i < order_id.length; i++) {
        tempVal = order_id[i];
        (function (val) {
            result.push(new Promise(function (resolve, reject) {
                sql.query("select * from cart where orderid = ?", val, function (err, rows) {
                    if (rows === undefined)
                        reject(new Error("Cannot fetch Cart Name"));
                    else {
                        resolve(rows);
                    }
                });
            }));
        })(tempVal);
    }

    return result;
}