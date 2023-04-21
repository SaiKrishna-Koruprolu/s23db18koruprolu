var express = require('express');
var router = express.Router();
var ship_controller = require("../controllers/ship")
/* GET home page. */
router.get('/', ship_controller.ship_view_all_Page);
/* GET detail ship page */
router.post('/create', ship_controller.ship_create_post);
module.exports = router;
/* GET create update page */
router.get('/update', ship_controller.ship_update_Page);
/* GET delete ship page */
router.get('/delete', ship_controller.ship_delete_Page);