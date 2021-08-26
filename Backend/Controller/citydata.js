const CityModel = require('../Model/citysearch')

const getData = async (req, res) => {
    try{
        const param = req.query.name
        const data = await CityModel.find({user: param})
        res.status(200).json(data)
    }catch (error){
        res.status(404).json({message:error.message})
    }

}

module.exports = getData