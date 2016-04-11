var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
    "twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photo": String
});




exports.User = mongoose.model('User', UserSchema);