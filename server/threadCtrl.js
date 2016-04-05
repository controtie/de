//This file should handle actions with database Thread collection.
var Q    = require('q');
var Thread = require('./threadModel.js');

// Promisify a few mongoose methods with the `q` promise library
var findThread = Q.nbind(Thread.findOne, Thread);
var createThread = Q.nbind(Thread.create, Thread);

exports.getThreads = function(req, res, next) {
  // Thread.create(testObject, function(err, res) {
  //   if (err) {
  //     console.log('error!!!!', err);
  //   } 
  //   console.log('Thread created!');
  // });
  findThread({})
    .then(function (thread) {
      console.log('successful check?' + thread);
      res.send(thread);
    })
    .fail(function (err) {
      console.log('error!', err);
    });
};

// var testObject = {
//   username: 'ayyy',
//   pub_key: 'au24232ueou',
//   priv_key: 'p214328pg4th43',
//   subject: 'how to douglas?',
//   body: 'plis teach me how to douglas',
//   comments: {
//     username: 'lmaooo',
//     text: 'nonononono'
//   }
// }