var express = require('express');
var router = express.Router();
var adminHelper = require('../models/admin');

router.get('/register', adminHelper.viewRegister);
router.post('/register', adminHelper.register);
router.get('/admin', adminHelper.viewEmployee);
router.get('/admin/edit/:id', adminHelper.viewSingleEmployee);
router.post('/admin/edit/:id', adminHelper.editSingleEmployee);
router.get('/admin/delete/:id', adminHelper.deleteSingleEmployee);

module.exports = router;