var express = require('express');
var router = express.Router();
var authHelper = require('../models/authentication');

// router.get('/register',function(req,res){
//     res.render('authentication/registration');
// });



// router.get('/auth',function(req,res){
//     res.render('authentication/login');
// })

router.post('/auth', authHelper.auth )

module.exports = router;