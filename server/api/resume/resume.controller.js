/**
 * Created by youngmoon on 5/15/15.
 */

var Resume = require('./resume.model');
var User = require('../user/user.model');
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

exports.createResume = function (req, res) {
  console.log(req.body);
  var newResume = new Resume(req.body);
  newResume.save(function (err, resume) {
    if (err) {
      res.json(400);
    }

    User.findByIdAndUpdate(req.body.user, {$push: {resumes: resume._id}, $set: {role: 'jobHunter'}}, function (err, user) {
      if (err) {
        res.json(400);
      }

      User.findById(req.body.user)
        .populate('resumes')
        .exec(function (err, rUser) {
          res.json(rUser);
        });
    });
  });
};
