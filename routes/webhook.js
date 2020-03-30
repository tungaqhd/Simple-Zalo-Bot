const express = require('express');
const router = express.Router();

const bot = require('../helpers/bot');
router.post('/', async(req, res) => {
    try {
        const message = req.body.message.text;
        const senderId = req.body.sender.id;
        
        await bot.sendMessage(senderId, `Bạn vừa nhắn ${message}`);
        res.send();
    } catch(e) {
        res.status(500);
        resizeBy.send(e);
    }
});
module.exports = router;