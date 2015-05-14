/**
 * Created by youngmoon on 5/14/15.
 */


var mongoose = require('mongoose');
var User = require('./user.model');
var tmpUser = require('./tmpUser.model');
var auth = require('../auth/auth');
var colors = require('colors');
var Ninja = require('tracer').console({
  format : "({{file}}:{{line}}) ".red+"≈<>".red.underline+" {{message}}"
});


exports.create = function (req, res) {
  Ninja.debug(req.body);

  var promise = User.find({email: req.body.email}).exec();

  promise.then(function (users) {
    if (users.length > 0) {
      res.status(409).json({name: 'email duplicated', message: 'This email address is already taken'})
    } else {
      (new tmpUser({email: req.body.email, password: req.body.password})).save();
      var newUser = new User(req.body);
      newUser.save(function (err, user) {
        if (err) {
          res.send(400);
        } else {
          res.json(user);
        }
      });
    }
  });
};
