/**
 * Created by youngmoon on 5/15/15.
 */
var express = require('express');
var controller = require('./resume.controller');
var auth = require('../auth/auth');
var router = express.Router();


router.get('/id/:rId', controller.getResumeById);

router.get('/name/:rUrl', controller.getResumeByUrl);


module.exports = router;
