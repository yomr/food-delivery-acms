
  var RestList = require('../controller/appController');
  var express = require("express");
  //const path = require('path');

  //const route = express.Router();
    //var path = __dirname + '/views/';

  
 // route.get('/',function(req,res){
  //res.sendFile(path.join(__dirname+'/displayrests.html'));
  //__dirname : It will resolve to your project folder.
//});



   const router= app=> {
   	app.get('/getallRestaurants',RestList.list_all_rest);
   }
   module.exports=router;