"use strict";

var express = require('express');

var router = express.Router(); // Require controller modules.

var api_controller = require('../controllers/api');

var ship_controller = require('../controllers/ship'); // A little function to check if we have an authorized user and continue on 
/// API ROUTE ///
// GET resources base.


router.get('/', api_controller.api); /// ship ROUTES ///
// POST request for creating a ship.  

router.post('/ships', ship_controller.ship_create_post); // DELETE request to delete ship.

router["delete"]('/ships/:id', ship_controller.ship_delete); // PUT request to update ship.

router.put('/ships/:id', ship_controller.ship_update_put); // GET request for one ship.

router.get('/ships/:id', ship_controller.ship_detail); // GET request for list of all ship items.

router.get('/ships', ship_controller.ship_list); // GET request for one ship. 

router.get('/ships/:id', ship_controller.ship_detail);
module.exports = router;
//# sourceMappingURL=resource.dev.js.map
