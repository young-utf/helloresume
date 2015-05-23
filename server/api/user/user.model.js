/**
 * Created by youngmoon on 5/14/15.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var UserSchema = new Schema({
  name: {
    type: String,
    index: true
  },
  profileImage: String,
  email: {
    type: String,
    required: true,
    index: true
  },
  emailAuth: {
    type: Boolean,
    default: false
  },
  hashedPassword: {
    type: String,
    select: false
  },
  salt: {
    type: String,
    select: false
  },
  role: {
    type: String,
    default: 'user',
    index: true
  },
  sns: {
    sort: String,
    id: String
  },
  url: {
    type: String,
    index: true
  },
  job: [{
    type: String,
    index: true
  }],
  joined: {
    type: Date,
    default: Date.now
  },
  resumes: [
    {
      type: String,
      resume: String,
      ref: 'Resume',
      index: true
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

/**
 * Virtuals
 */
UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });


/**
 * Methods
 */
UserSchema.methods = {
  /**
   * Authenticate - check if the passwords are the same
   */

  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword;
  },

  makeSalt: function() {
    return crypto.randomBytes(16).toString('base64');
  },

  /**
   * Encrypt password
   *
   */

  encryptPassword: function(password) {
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
  }
};



module.exports = mongoose.model('User', UserSchema);
