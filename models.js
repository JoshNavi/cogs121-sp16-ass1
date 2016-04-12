var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
    "twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photo": String
});

//SocketIO Schema
var NewsFeedSchema = new Schema({
	"user": String,
	"message": String,
	"posted": Date
});

var DrinkSchema = new Schema({
  "id": String,
  "name": String,
  "type": String,
  "description": String
});

var CommentSchema = new Schema({
  "id": String,
  "drinkID": { type: Schema.Types.ObjectID, ref: 'Drink' },
  'userID': { type: Schema.Types.ObjectID, ref: 'User' },
  "text" : String
});


exports.NewsFeed = mongoose.model('NewsFeed', NewsFeedSchema);
exports.User = mongoose.model('User', UserSchema);
exports.Drink = mongoose.model('Drink', DrinkSchema);
exports.Comment = mongoose.model('Comment', CommentSchema);
