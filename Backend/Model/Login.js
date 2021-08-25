const mongoose = require("mongoose")

const loginSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,

})

const LoginModel = new mongoose.model('logindetail', loginSchema);


module.exports = LoginModel