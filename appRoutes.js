
  var RestList = require('../controller/appController');
  var express = require("express");
  
   const router= app=> {
   	app.get('/getallRestaurants',RestList.list_all_rest);
   }
   module.exports=router;