/**
 * Created by youngmoon on 5/14/15.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  profileImage: String,
  email: String,
  password: String,
  salt: String,
  sns: {
    sort: String,
    id: String
  },
  url: String,
  job: [String],
  joined: {
    type: Date,
    default: Date.now
  },
  resumes: [
    {
      type: String,
      resume: String,
      ref: 'Resume'
    }
  ],
  checkList: [
    {
      type: String,
      resume: String,
      ref: 'Resume'
    }
  ]
});


module.exports = mongoose.model('User', UserSchema);
