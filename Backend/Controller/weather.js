import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {  logout } from '../Redux/Action/actions';
import { useState, useEffect} from 'react';
import { cityWeather, location } from '../Thunk/thunk';


const Dashboard = () => {

    const dispatch = useDispatch()
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
  
    

    const weatherReport = useSelector((state) => state.Users.weatherLL)
    const cityWeatherReport = useSelector((state) => state.Users.weatherCity)
    const name = useSelector((state) => state.Users.name)
    const userCity = useSelector((state) => state.Users.userCity)

    const [wcity, setWcity] = useState({user: name, city:''})

    const handleLogout = () => {
        localStorage.clear()
        dispatch(logout())
    }

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((location) => {
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
        })

    }

    useEffect(() => {
        getLocation()
    })


    const handleWeather = () => {
        dispatch(location({lat, lon, userCity}))
        
    }

    const handleCity = (e) => {
        const {name, value} = e.target
        setWcity({...wcity, [name]: value})
    }

    const handleCitySubmit = (e) => {
        e.preventDefault()
        dispatch(cityWeather(wcity))
    }

    return (
        <div>
        <Button variant="danger" onClick={() => handleLogout()} >Logout</Button>
        <h1>Welcome to the Dasboard</h1> 
        <br />
        <br />
        <Button variant="info" onClick={() => handleWeather()} >Todays Weather</Button>
        <h4>{weatherReport}</h4>
        <br />
        <br />
        <form onSubmit={handleCitySubmit}>
        <input type='text' name='user' defaultValue={name} onChange={handleCity} />
        <input type='text' name='city'placeholder='Enter city' onChange={handleCity} />&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit">Get Weathr Report</button>
        </form>
        <br />
        <h4>{cityWeatherReport}</h4>
        </div>
    )
}

export default Dashboard
