var express = require('express');
var router = express.Router();
var employeeHelper = require('../models/employee');

router.get('/add', employeeHelper.viewAdd);
router.post('/add', employeeHelper.add);
router.get('/employee', employeeHelper.viewProduct);
router.get('/employee/edit/:id', employeeHelper.viewSingleProduct);
router.post('/employee/edit/:id', employeeHelper.editSingleProduct);
router.get('/employee/delete/:id', employeeHelper.deleteSingleProduct);

module.exports = router;