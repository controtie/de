var Q    = require('q');
var User = require('./userModel.js');


// Promisify a few mongoose methods with the `q` promise library
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

exports.getUsers = function(req, res, next) {
  // User.create({username: 'ayyyy'}, function(err, res) {
  //   if (err) {
  //     console.log('error!!!!', err);
  //   } 
  //   console.log('User created!');
  // });
  findUser({})
    .then(function (user) {
      console.log('successful check?' + user);
    })
    .then(function () {
      res.send('successful get request!');
    })
    .fail(function (err) {
      console.log('error!', err);
    });
};