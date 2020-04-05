const config = require('./config/config');
require('./config/database');

const path = require('path');
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, './public')))
app.set('view engine', 'ejs')

const routes = require('./routes/index');

app.use(routes);
app.listen(config.PORT, () => console.log(`Bot is running on port ${config.PORT}`));