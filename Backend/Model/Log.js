const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: String,
        default: (new Date()).getTime().toString()
    },
    email: String,
})

const LogModel = new mongoose.model("logdetails", logSchema)

module.exports = LogModel