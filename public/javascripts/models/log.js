const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    hostname: String,
    startTime: Date,
    startTimeLocal: String,
    userID: String,
    pid: Number,
    data: {
        name: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        img: String
    }
})

var Log = mongoose.model('Log', LogSchema);

module.exports = Log;