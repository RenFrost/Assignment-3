import {Link } from 'react-router-dom'
import React from 'react'
// import "./Navbar.css"

const NavBar = () => {
    return(
        <nav className="navbar">
            <Link to="/">Homepage</Link> |  
            <Link to="/about">About Me</Link> |
            <Link to="/experiences">Work Experience</Link> |
            <Link to="/skills">Skills</Link> |
            <Link to="/interests">Interests</Link> |
            <Link to="/Awards">Awards</Link> |
        </nav>
    )
}

export default NavBar