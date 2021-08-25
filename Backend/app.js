const express = require("express")
const mongoose = require("mongoose")
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const loginRoutes = require('./Routes/LoginRoutes')


const PORT = process.env.PORT || 7000;


mongoose.connect('mongodb://localhost:27017/WeatherDB', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected !");
});

app.get('/user', (req, res) => {
    res.send("Hello from about")
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(morgan('tiny'));
app.use(loginRoutes)

app.listen(PORT, console.log(`Server is startin at ${PORT}`));