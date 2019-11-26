var express = require("express");
router = express.Router();

router.get("/", function(req, res) {
  res.render("cats/index");
});

router.get("/cat", function(req, res) {
  res.render("cats/show");
  console.log("here's a cat");
});

module.exports = router;
