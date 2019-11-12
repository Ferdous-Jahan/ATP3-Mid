var express = require('express');
var router = express.Router();
var authHelper = require('../models/authentication');

// router.get('/register',function(req,res){
//     res.render('authentication/registration');
// });

router.post('/register',function(req,res){
    console.log(req.body);
    if(req.body.password === req.body.password_confirmation)
    {
    // db.query(`INSERT INTO userdetails( name, address, phone, email, password, type, preference, image) VALUES ('${req.body.name}','${req.body.address}','${req.body.phone}','${req.body.email}','${req.body.password}','member','null','null')`,function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results[0]);
    //   })
    authHelper.register(req.body);
    }
    else
    {
        console.log('pass doesnt match');
    }
    res.redirect('/auth');
})

router.get('/auth',function(req,res){
    res.render('authentication/login');
})

router.post('/auth', authHelper.auth )

module.exports = router;