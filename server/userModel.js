var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  pub_key: String,
  priv_key: String,
});

//change this to bcrypt...
var createSha = function (url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

userSchema.pre('save', function (next) {
  var code = createSha(this.url);
  this.code = code;
  next();
});

module.exports = mongoose.model('User', userSchema);