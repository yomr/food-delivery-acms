
  var listOfRest = require('../controller/restController');
  var express = require("express");
  
   const router= app=> {
   	app.get('/getallRestaurants',listOfRest.listAllRest);
   }
   module.exports=router;