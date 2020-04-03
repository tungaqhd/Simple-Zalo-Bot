const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello there');
});

router.use('/webhook', require('./webhook'));
router.use('/admin', require('./admin'));

module.exports = router;