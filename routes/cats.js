var express = require("express"),
  Cat = require("../models/cat"),
  router = express.Router();

// TODO: INDEX route
router.get("/", function(req, res) {
  Cat.find({}, function(err, allCats) {
    if (err) {
      console.log(err);
    } else {
      res.render("cats/index", { cats: allCats });
    }
  });
});

// TODO: CREATE

// TODO: NEW

// TODO :SHOW
router.get("/:id", function(req, res) {
  Cat.findById(req.params.id).exec(function(err, foundCat) {
    if (err) {
      console.log(err);
    } else {
      console.log(foundCat);
      res.render("cats/show", { cat: foundCat });
    }
  });
});

// TODO: EDIT

// TODO: UPDATE

// TODO: DESTROY
module.exports = router;
