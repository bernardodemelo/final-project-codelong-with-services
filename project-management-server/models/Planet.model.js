const mongoose = require('mongoose');
const {Schema, model} = mongoose; 

const planetSchemaSchema = new Schema({
  name: String,
  description: String,
  moons: [{ type: Schema.Types.ObjectId, ref: "Moon" }],
});

module.exports = model("Planet", planetSchemaSchema);