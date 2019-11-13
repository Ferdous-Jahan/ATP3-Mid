var express = require('express');
var router = express.Router();
var employeeHelper = require('../models/employee');

router.get('/employee', employeeHelper.viewProduct);
router.get('/employee/edit/:id', employeeHelper.viewSingleProduct);
router.post('/employee/edit/:id', employeeHelper.editSingleProduct);

module.exports = router;