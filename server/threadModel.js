var mongoose = require('mongoose');

var threadSchema = new mongoose.Schema({
  username: String,
  pub_key: String,
  priv_key: String,
  subject: String,
  body: String,
  comments: [{ 
    username: String,
    text: String
  }]
});


module.exports = mongoose.model('Thread', threadSchema);