// Import Express and burger.js
// ==================================================
var express = require('express');
var router = express.Router();
var db = require('../models/burger.js');

// Routes
// ==================================================

console.log('derp');

router.get("/api/burgers", function(req, res, next) {
  db.Burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    console.log(data);
  }).then(function(hbsObject){
    res.render("index", hbsObject);
  });
});

/*
router.post("/api/burgers/create", function(req, res) {
  db.Burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/burgers");
  });
});


router.put("/api/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.Burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/burgers");
  });
});

router.delete("/api/burgers/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  db.Burger.delete(condition, function() {
    res.redirect("/burgers");
  });
});
*/
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

console.log(router);

// Export routes for server.js to use.
module.exports = router;