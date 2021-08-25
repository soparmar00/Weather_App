import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

const Nav = () => {

    const token = useSelector(state => state.Users.token)
    return (
        <div>
        <ul>
        <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        {!token && (<Link to='/login'>Login</Link>)}&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/about'>About</Link>
        </ul>
        </div>
    )
}

export default Nav
