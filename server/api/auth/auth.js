/**
 * Created by youngmoon on 5/14/15.
 */
var colors = require('colors');
var Ninja = require('tracer').console({
  format : "({{file}}:{{line}}) ".red+"≈<>".red.underline+" {{message}}"
});


exports.index = function () {

};

exports.isLogin = function (req, res, next) {
  if (req.headers.authorization && req.headers.authorization.indexOf('HResume') > -1) {
    next();
  } else {
    res.status(401).json({message: 'No Authenticated'});
  }
};

exports.isAdmin = function (req, res, next) {
  if (req.headers.authorization && req.headers.authorization.indexOf('555577dc7e8046c72a6bdacd')) {
    next();
  } else {
    res.status(401).json({message: 'No Authenticated'});
  }
};
