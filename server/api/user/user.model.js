/**
 * Created by youngmoon on 5/14/15.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var UserSchema = new Schema({
  name: String,
  profileImage: String,
  email: String,
  hashedPassword: String,
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
