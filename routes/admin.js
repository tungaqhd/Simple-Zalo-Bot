const express = require('express');
const router = express.Router();

const bot = require('../helpers/bot');
router.get('/', async(req, res) => {
    res.send(`
    <form action="/admin/send" method="post">
    <input type="text" name="message" />
    <button type="submit">Gửi</button>
    </form>
    `)
});

router.post('/send', async(req, res) => {
    const {message} = req.body;
    const result = await bot.getUsers(0, 10);
    const users = result.followers;

    jobs = [];
    for(user of users) {
        jobs.push(bot.sendMessage(user.user_id, message));
    }

    await Promise.all(jobs);
    res.send(users);
})

module.exports = router;