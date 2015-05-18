/**
 * Created by youngmoon on 5/14/15.
 */

var User = require('./user.model');
var tmpUser = require('./tmpUser.model');
var auth = require('../auth/auth');
var colors = require('colors');
var Ninja = require('tracer').console({
  format : "({{file}}:{{line}}) ".red+"≈<>".red.underline+" {{message}}"
});


exports.index = function (req, res) {
  var promise = User.find({})
    .sort({joined: 1})
    .populate('resumes')
    .exec();
  promise.then(function (users) {
    res.json(users);
  });
};

exports.login = function (req, res) {
  var promise = User.findOne({email: req.body.email}).select('+hashedPassword +salt').populate('resumes').exec();
  promise.then(function (user) {
    if (user) {
      var result = user.authenticate(req.body.password);
      if (result) {
        delete user.hashedPassword;
        delete user.salt;
        res.json(user);
      } else {
        res.status(404).json({name: 'Password', message: 'Wrong Password'})
      }
    } else {
      res.status(404).json({name: 'User', message: 'No User Found'});
    }
  });
};

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

exports.getOne = function (req, res) {
  var userId = req.params.id;

  User.findById(userId)
    .populate('resumes')
    .exec(function (err, user) {
      if (user) {
        Ninja.debug(user);
        res.json(user);
      } else {
        res.status(404).json({name: 'no user', message: 'No User found'});
      }
    });
};
