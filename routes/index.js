const express = require('express');
const router = express.Router()

router.use('/webhook', require('./webhook'));
router.use('/admin', require('./admin'));

module.exports = router;