//const express = require('express');
var food = require('../controller/menu');
  
const router = app => {
  app.get('/getMenu/res_id=:rid', food.read_menu);
}

module.exports = router;