var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: String,
	password: String
});




exports.User = mongoose.model('User', UserSchema);