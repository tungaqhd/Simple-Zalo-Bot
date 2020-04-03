const express = require('express');
const router = express.Router();

const bot = require('../helpers/bot');
const Robot = require('../models/Robot');

router.get('/send', async (req, res) => {
    views = {};
    views.page = 'Send Message';
    res.render('send', { views });
});
router.post('/send', async (req, res) => {
    try {
        const { message } = req.body;
        let users = [];

        while (true) {
            const result = await bot.getUsers(users.length, 50);
            users = [...users, ...result.followers];

            if (users.length == result.total) {
                break;
            }
        }

        let jobs = [];
        for (let i = 0; i < users.length; ++i) {
            jobs.push[bot.sendMessage(users[i].user_id, message)];

            if (jobs.length === 5 || i === users.length - 1) {
                await Promise.all(jobs);
                jobs = [];
            }
        }

        res.send({
            status: 'success',
            message: 'Gửi tin nhắn thành công'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            status: 'fail',
            message: e.message
        });
    }
});

router.get('/robot', async (req, res) => {
    try {
        let views = {
            page: 'Robot'
        }

        views.messages = await Robot.find({});
        res.render('robot', { views });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});
router.post('/robot', async (req, res) => {
    try {
        const { code, message } = req.body;

        const d = new Date();
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        const vnTime = new Date(utc + (3600000 * 7));
        console.log(vnTime.getDay());
        const lastUpdate = `${vnTime.getDate()}/${vnTime.getMonth()+1}/${vnTime.getFullYear()} ${vnTime.getHours()}:${vnTime.getMinutes()}`;

        let result = await Robot.findOneAndUpdate({ code }, { message, lastUpdate });
        if (!result) {
            await Robot({ code, message, lastUpdate }).save();
        }

        res.redirect('/admin/robot');
    } catch (e) {
        console.log(e);
        res.status(500).send({
            status: 'fail',
            message: e.message
        });
    }
});
module.exports = router;