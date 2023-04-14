"use strict";

var mongoose = require("mongoose");

var shipSchema = mongoose.Schema({
  Model: {
    type: String,
    required: [true, 'Model of the ship cannot be empty']
  },
  yearofmanufacturing: {
    type: String,
    required: [true, 'Number of the ship cannot be empty']
  },
  color: String
});
module.exports = mongoose.model("ship", shipSchema);
//# sourceMappingURL=ship.dev.js.map
