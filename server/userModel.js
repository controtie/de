var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  pub_key: String,
  priv_key: String,
});

//this should look for a collection named 'Users'.
//if the collection doesn't exist it should create one.
module.exports = mongoose.model('User', userSchema);