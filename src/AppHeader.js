import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { AppStyles } from './AppStyles';

const NavLink = (props) => {
    const [background, setBackground] = useState("inherit");
    const location = useLocation();

    const linkStyles = {
        backgroundColor: background,
        color: location.pathname === props.path ? "#CE3838": "white",
        borderBottom: location.pathname === props.path ? "3px solid #CE3838" : ""
    }

    return (
        <Link 
        to={props.path} 
        className='header-nav-button'
        onMouseEnter={() => setBackground("rgb(100, 100, 100, .1)")}
        onMouseLeave={() => setBackground("inherit")}
        style={linkStyles}
        >
        {props.name}
        </Link>
    )
}
  
const AppHeader = () => {

    return (
        <div className='app-header'>
            <img className="header-logo" src="/pokegroups-logo.png" alt="PokeGroups"/>
            
            <div className='header-nav-set'>
                <NavLink path="/" name="Home"/>
                <NavLink path="/sv" name="Scarlet / Violet"/>
                <NavLink path="/pogo" name="Pokemon GO"/>
                <NavLink path="/community" name="Community"/>
            </div>
            
            <div className='header-links'>
                <div><a style={{color:'pink'}}href="/about">About</a></div>
                <div><a style={{color:'pink'}}href="/account">Account</a></div>
                <div><a style={{color:'pink'}}href="/contribute">Contribute</a></div>
            </div>
        </div>
    )
}
export default AppHeader;