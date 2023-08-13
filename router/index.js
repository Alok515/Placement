const router = require('express').Router();
const employeeRouter = require('./unauthEmployee');

router.use('/employee', employeeRouter);

module.exports = router;