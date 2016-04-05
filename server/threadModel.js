var mongoose = require('mongoose');

var threadSchema = new mongoose.Schema({
  username: String,
  pub_key: String,
  priv_key: String,
  subject: String,
  body: String,
  bounty: Number,
  comments: [{ 
    username: String,
    text: String
  }]
});

exports.Thread = mongoose.model('Thread', threadSchema);

exports.CThread = mongoose.model('CThread', threadSchema);