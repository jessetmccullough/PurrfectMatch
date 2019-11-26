// SETUP
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  Cat = require("./models/cat");

// ROUTES
var indexRoutes = require("./routes/index"),
  catRoutes = require("./routes/cats");

mongoose.connect("mongodb://localhost/purrfectMatch", {
  useNewUrlParser: true
});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", indexRoutes);
app.use("/cats", catRoutes);

app.listen(3000, function() {
  console.log("server is running");
});
