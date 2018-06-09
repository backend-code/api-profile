const mongoose = require('mongoose');

const PersonalUser = new mongoose.Schema({
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

var Personal = mongoose.model('Personal', PersonalUser);

module.exports = Personal;