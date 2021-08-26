


const weather = async (req, res) => {
    try {
        const params1  = req.query.lat
        const params2  = req.query.lon
        console.log(params1, params2)

        const api_key = 'c7fff0558f88393541614e0c8ecdbb33';

        const url = `http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}`

        
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = weather