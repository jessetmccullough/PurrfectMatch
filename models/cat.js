var mongoose = require("mongoose");

// SCHEMA setup
var catSchema = new mongoose.Schema({
  name: String,
  image: String,
  age: Number,
  sex: String,
  breed: String,
  description: String
});

module.exports = mongoose.model("Cat", catSchema);
