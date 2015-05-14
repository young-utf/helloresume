/**
 * Created by youngmoon on 5/14/15.
 */


var express = require('express');
var controller = require('./user.controller');
var auth = require('../auth/auth');
var router = express.Router();


router.get('/', auth.isLogin, controller.index);
router.post('/', controller.create);

router.post('/login', controller.login);

router.get('/:id', auth.isLogin, controller.getOne);



module.exports = router;
