'use strict';
var sql = require('../controller/db.js');
var queries = require ('../controller/queries');


var Review = function(req,res){
    var test = req.body;
    this.res_review = test.res_review;
    this.dboy_review = test.dboy_review;
    this.res_rating = test.res_rating;
    this.dboy_rating = test.dboy_rating;
    
};

Review.createNewFeedback = function createFeedback(Review,orderID, result) {   
    var params=[orderID,Review.res_review,Review.dboy_review,Review.res_rating,Review.dboy_rating];
        sql.query(queries.postreview,params, function (err, res)
        {    
                if(err) 
                {
                    console.log("error: ", err);
                    result(err, null);
                }
                else
                {
                    console.log("1 record inserted");
                }
        });             
};
module.exports= Review;