/**
 * Created by youngmoon on 5/14/15.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tmpUserSchema = new Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('tmpUser', tmpUserSchema);
