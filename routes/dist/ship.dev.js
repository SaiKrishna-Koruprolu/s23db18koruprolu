"use strict";

var express = require('express');

var ship_controller = require("../controllers/ship");

var router = express.Router(); // A little function to check if we have an authorized user and continue on
// redirect to login.

var secured = function secured(req, res, next) {
  if (req.user) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
};
/* GET home page. */


router.get('/', ship_controller.ship_view_all_Page);
/* GET detail ship page */

router.post('/create', secured, ship_controller.ship_create_post);
module.exports = router;
/* GET create update page */

router.get('/update', secured, ship_controller.ship_update_Page);
/* GET delete ship page */

router.get('/delete', secured, ship_controller.ship_delete_Page);
/* GET update ship page */

router.get('/update', secured, ship_controller.ship_update_Page);
router.get('/detail', ship_controller.ship_view_one_Page);
//# sourceMappingURL=ship.dev.js.map
