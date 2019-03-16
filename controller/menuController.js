var sql= require ('./db');
var queries = require ('./queries'); // consolidated file for all mysql queries used in the project

//get Menu 
exports.readMenu = function(req, res) {
        let res_id = req.query.res_id;
        sql.query(queries.getMenu,res_id, function (err, rows) {             
                if(err) {
                    res.send(err);
                }
                else{
                    res.send(rows);
              
                }
            });   
};