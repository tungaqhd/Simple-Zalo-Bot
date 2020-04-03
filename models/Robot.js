const mongoose = require('mongoose');
const robotSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Robot = mongoose.model('Robot', robotSchema);
module.exports = Robot;