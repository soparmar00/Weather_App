const express = require('express')
const {register, login} = require('../Controller/login')
const {weather, cityWeather}  = require('../Controller/weather')
const getData = require('../Controller/citydata')
const routes = express.Router();



routes.post('/signup', register)
routes.post('/login', login)
routes.get('/dashboard/weather', weather)
routes.get('/dashboard/city', cityWeather)
routes.get('/history', getData)

module.exports = routes;