const express = require('express');
const router = express.Router();

const bot = require('../helpers/bot');
const Robot = require('../models/Robot');

const zaloMiddleware = require('../middlewares/zaloMiddleware');
router.post('/', zaloMiddleware.auth, async (req, res) => {
    try {
        if (req.body.event_name === 'user_send_text') {
            const message = req.body.message.text.toLowerCase();
            const senderId = req.body.sender.id;

            if (message === 'about') {
                await bot.sendMessage(senderId, `Tư vấn Auto Trading, tín hiệu mua bán chứng khoán phái sinh`);
            } else if (message === 'help') {
                await bot.sendMessage(senderId, `Nhập mã chứng khoán và nhấn gửi để nhận được thông tin`);
            } else {
                const result = await Robot.findOne({ code: message });
                if (!result) {
                    await bot.sendMessage(senderId, `Nhập mã chứng khoán ${message} không hợp lệ hoặc chưa được cập nhật`);
                } else {
                    await bot.sendMessage(senderId, `${result.lastUpdate}\n-------------------------------------\n${result.message}`);
                }
            }
        } else if (req.body.event_name === 'follow') {
            const senderId = req.body.follower.id;
            const result = await Robot.findOne({ code: 'gioithieu' });
            if (!result) {
                await bot.sendMessage(senderId, 'Chào mừng bạn đến với kênh tư vấn Auto Trading, tín hiệu mua bán chứng khoán phái sinh');
            } else {
                await bot.sendMessage(senderId, result.message);
            }
        }
        res.send();
    } catch (e) {
        res.status(500);
        console.log(e);
        res.send(e);
    }
});
module.exports = router;