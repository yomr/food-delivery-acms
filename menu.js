var sql= require ('./db.js')
exports.read_menu = function(req, res) {
        let res_id = req.params.rid;
        sql.query("Select * from menu where res_id = ?",res_id, function (err, rows) {             
                if(err) {
                    res.send(err);
                }
                else{
                    res.send(rows);
              
                }
            });   
};