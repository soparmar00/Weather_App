const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    user:{
        type: String
    },
    cityName: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: Date,
        default: new Date()
    },
    cityReport: {
        type: String
    }

})

const CityModel = new mongoose.model('citydetails', citySchema)

module.exports = CityModel