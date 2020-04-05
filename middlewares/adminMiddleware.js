const config = require('../config/config');
const jwt = require('jsonwebtoken');
exports.auth = (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.redirect('/admin');
        }

        const decoded = jwt.verify(token, config.JWT_TOKEN);
        if(decoded.isAdmin) {
            next();
        }
    } catch (e) {
        res.redirect('/admin');
    }
}