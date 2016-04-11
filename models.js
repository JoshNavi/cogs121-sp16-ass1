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
})

exports.NewsFeed = mongoose.model('NewsFeed', NewsFeedSchema);



exports.User = mongoose.model('User', UserSchema);