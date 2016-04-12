// var models = require("../models");

exports.view = function(req, res) {
  res.render("chat")
};

exports.postDrink = function(req, res) {
  console.log(req.body);

  var drink = new models.Drink({
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
  });

  drink.save(function(err, data) {
    if (err) console.log(err);
  });
};

exports.postComment = function(req, res) {
  console.log(req.body);

  var comment = new models.Comment({
      drinkID: req.body.name,
      userID: req.body.type,
      text: req.body.text,
  });

  drink.save(function(err, data) {
    if (err) console.log(err);
  });
};
