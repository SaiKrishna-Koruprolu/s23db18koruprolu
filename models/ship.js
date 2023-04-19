const mongoose = require("mongoose")
const shipSchema = mongoose.Schema({
 Model: {type: String,required: [true, 'Model of the ship cannot be empty']},
 yearofmanufacturing: {type: String,required: [true, 'Number of the ship cannot be empty']},
 color: String
})
module.exports = mongoose.model("ship",shipSchema)
