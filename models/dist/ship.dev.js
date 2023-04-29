"use strict";

var mongoose = require("mongoose");

var shipSchema = mongoose.Schema({
  Model: {
    type: String,
    required: [true, 'Model of the ship cannot be empty']
  },
  yearofmanufacturing: {
    type: Number,
    required: [true, 'Year of manufacturing of the ship cannot be empty'],
    min: [1900, 'Year of manufacturing of the ship should be at least 1900'],
    max: [new Date().getFullYear(), 'Year of manufacturing of the ship should not be in the future']
  },
  color: String
});
module.exports = mongoose.model("ship", shipSchema);
//# sourceMappingURL=ship.dev.js.map
