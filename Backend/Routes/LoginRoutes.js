const express = require('express')
const {register, login} = require('../Controller/login')
const weather = require('../Controller/weather')
const routes = express.Router();



routes.post("/signup", register)
routes.post("/login", login)
routes.get('/dashboard/weather', weather)

module.exports = routes;