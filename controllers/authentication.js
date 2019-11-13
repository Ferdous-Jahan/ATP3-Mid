var express = require('express');
var router = express.Router();
var authHelper = require('../models/authentication');

router.post('/auth', authHelper.auth )

module.exports = router;