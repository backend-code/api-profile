const mongoose = require('mongoose');

const PublicUser = new mongoose.Schema({
    startTime: Date,
    startTimeLocal: String,
    userID: String,
    pid: Number,
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
    img: String,
    head_story: String,
    story: String,
    content_about: String,
})

var Public = mongoose.model('Public', PublicUser);

module.exports = Public;