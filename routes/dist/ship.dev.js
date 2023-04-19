"use strict";

var express = require('express');

var router = express.Router(); // var ship_controller = require("../controllers/ship")

/* GET home page. */

router.get('/', function (req, res, next) {
  var query = req.query;
  console.log("rows ".concat(query.rows));
  console.log("cols ".concat(query.cols));
  res.render('ship', {
    title: 'Grid Build',
    query: query
  });
});
/* GET detail ship page */
// router.get('/detail', ship_controller.ship_view_one_Page);

module.exports = router;
//# sourceMappingURL=ship.dev.js.map
