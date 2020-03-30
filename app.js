const config = require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes/index');

app.use(routes);

app.listen(config.PORT, () => console.log(`Bot is running on port ${config.PORT}`));