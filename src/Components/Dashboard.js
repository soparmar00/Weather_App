import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { logout } from '../Redux/Action/actions';
import { useState } from 'react';


const Dashboard = () => {

    const dispatch = useDispatch()
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    const [state, setState] = useState(null)
    

    const handleLogout = () => {
        localStorage.clear()
        dispatch(logout())
    }

    const handleLoaction = () =>{
        if(!navigator.geolocation) {
            setState('Geoloaction is not supported')
        }
        else{
            setState("Loacting...");
            navigator.geolocation.getCurrentPosition((location) => {
                setState(null);
                setLat(location.coords.latitude);
                setLon(location.coords.longitude);
            })
        }
    }

    return (
        <div>
        <Button variant="danger" onClick={() => handleLogout()} >Logout</Button>
        <h1>Welcome to the Dasboard</h1> 
        <br />
        <br />
        <Button variant="secondary"  onClick={() => handleLoaction()} >Get Location </Button>
        <br />
        <br />
        <h3>Cordinates</h3>
        <p>{state}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lon && <p>Longitude: {lon}</p>}
        <br />
        <br />
    
        </div>
    )
}

export default Dashboard
