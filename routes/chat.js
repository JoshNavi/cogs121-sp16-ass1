var models = require("../models");

exports.view = function(req, res) {
  models.Drink.find(function(err, data) {
  	if (err) console.log(err);
  	else res.render('chat', {data: data});
  });};

exports.postDrink = function(req, res) {
  console.log(req.body);

  var drink = new models.Drink({
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      comments: []
  });

  drink.save(function(err, data) {
    if (err) console.log(err);
  });
};

exports.postComment = function(req, res) {
  console.log(req.body);

  var comment = new models.Comment({
      text: req.body.text,
  });

  var Drink = mongoose.model('Drink');
  Drink.findOne({name: req.body.name}, function(err, doc){
    if(!err) {
      doc.comments.push( comment );
      doc.save(function(err) {
        if(err) console.log(err);
      });
    }
  });
};
