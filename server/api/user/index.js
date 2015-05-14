/**
 * Created by youngmoon on 5/14/15.
 */


var express = require('express');
var controller = require('./user.controller');
var auth = require('../auth/auth');
var router = express.Router();


router.get('/');
router.post('/', auth.isLogin, controller.create);


module.exports = router;
