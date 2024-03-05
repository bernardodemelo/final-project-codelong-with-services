const mongoose = require('mongoose');
const {Schema, model } = mongoose; 

const moonSchema = new Schema({
  name: String,
  description: String,
  planet: { type: Schema.Types.ObjectId, ref: "Planet" },
});

module.exports = model("Moon", moonSchema);