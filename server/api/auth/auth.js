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
  Ninja.debug(req.headers);
  next();
};
