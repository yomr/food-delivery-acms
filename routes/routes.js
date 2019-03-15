
var food = require('../controller/menuController');
  
const router = app => {
  app.get('/getMenu', food.readMenu);
}

module.exports = router;