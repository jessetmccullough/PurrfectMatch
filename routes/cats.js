var express = require("express"),
  Cat = require("../models/cat"),
  router = express.Router();

// INDEX route
router.get("/", function(req, res) {
  Cat.find({}, function(err, allCats) {
    if (err) {
      console.log(err);
    } else {
      res.render("cats/index", { cats: allCats });
    }
  });
});

// NEW route
router.get("/new", function(req, res) {
  res.render("cats/new");
});

// CREATE route
router.post("/", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var age = parseInt(req.body.age);
  var sex = req.body.sex;
  var breed = req.body.breed;
  var desc = req.body.description;
  var newCat = {
    name: name,
    image: image,
    age: age,
    sex: sex,
    breed: breed,
    description: desc
  };
  Cat.create(newCat, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      console.log(newlyCreated);
      res.redirect("/cats");
    }
  });
});

// SHOW route
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

// EDIT route
router.get("/:id/edit", function(req, res) {
  Cat.findById(req.params.id, function(err, foundCat) {
    if (err) {
      console.log(err);
    } else {
      res.render("cats/edit", { cat: foundCat });
    }
  });
});

// UPDATE route
router.put("/:id", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var age = parseInt(req.body.age);
  var sex = req.body.sex;
  var breed = req.body.breed;
  var desc = req.body.description;
  var editedCat = {
    name: name,
    image: image,
    age: age,
    sex: sex,
    breed: breed,
    description: desc
  };
  Cat.findByIdAndUpdate(req.params.id, editedCat, function(err, updatedCat) {
    if (err) {
      res.redirect("/cats");
    } else {
      res.redirect("/cats/" + req.params.id);
    }
  });
});

// DESTROY route
router.delete("/:id", function(req, res) {
  Cat.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect("/cats");
    } else {
      res.redirect("/cats");
    }
  });
});

module.exports = router;
