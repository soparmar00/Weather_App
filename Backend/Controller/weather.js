const axios=require("axios")
const CityModel = require('../Model/citysearch')
const url = "http://api.openweathermap.org/data/2.5/weather"
const api_key = 'c7fff0558f88393541614e0c8ecdbb33';

const weather = async (req, res) => {
    try {
        const params1 = req.query.lat
        const params2 = req.query.lon
        const params3 = req.query.userCity 
        console.log(params1, params2, params3)


        if(params1){
        const weatherUrl = url+`?lat=${params1}&lon=${params2}&appid=${api_key}`

        const fetchWeather = await axios.get(`${weatherUrl}`)
        const convert = JSON.stringify(fetchWeather.data)
        res.status(200).json(convert)
        }
        else{
            const cityWeatherUrl = url+`?q=${params3}&appid=${api_key}`
            const fetchCityWeather = await axios.get(`${cityWeatherUrl}`)
            const convertCity = JSON.stringify(fetchCityWeather.data)
            res.status(200).json(convertCity)
        }   
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const cityWeather = async (req, res) => {
    try{
        const param1 = req.query.city
        const param2 = req.query.name
        console.log(param1, param2)

        const weatherUrl = url+`?q=${param1}&appid=${api_key}`

        const featchWeather = await axios.get(`${weatherUrl}`)
        const convert = JSON.stringify(featchWeather.data)
        
        const user=param2
        const date=new Date()
        const time=new Date()
        const cityName= param1
        const cityReport=convert
        const cityData = new CityModel({user, date, time, cityName, cityReport})
        await cityData.save()

        res.status(200).json(convert)
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {weather, cityWeather}