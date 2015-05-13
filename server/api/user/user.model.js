/**
 * Created by youngmoon on 5/14/15.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  sns: {
    
  }
});


module.exports = mongoose.model('User', UserSchema);
