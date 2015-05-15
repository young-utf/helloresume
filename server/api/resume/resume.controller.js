/**
 * Created by youngmoon on 5/15/15.
 */

var Resume = require('./resume.model');
var Ninja = require('tracer').console({
  format : "({{file}}:{{line}}) ".red+"≈<>".red.underline+" {{message}}"
});

exports.index = function (req, res) {

};

exports.getResumeById = function (req, res) {
  Resume.findById(req.params.rId, function (err, resume) {
    if (err) {
      res.status(404).json({message: err});
    }
    res.json(resume);
  });
};

exports.getResumeByUrl = function (req, res) {
  Resume.findOne(req.params.rUrl, function (err, resume) {
    if (err) {
      res.status(404).json({message: err});
    }
    res.json(resume);
  });
};
