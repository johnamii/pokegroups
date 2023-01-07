import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import Scrollbars from 'react-custom-scrollbars-2'
import { AppStyles } from './AppStyles';

const NavLink = (props) => {
    const [background, setBackground] = useState("inherit");
    const location = useLocation();

    const linkStyles = {
        backgroundColor: background,
        color: location.pathname === props.path ? "#CE3838": "white",
        borderBottom: location.pathname === props.path ? "5px solid #CE3838" : "none",
        fontSize: isMobile ? '.9rem' : '1.15rem',
        paddingLeft:  isMobile ? '2.5em' : '1em',
        paddingRight: isMobile ? '2.5em' : '1em'
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
            <img 
             className="header-logo" 
             src="/pokegroups-logo.png" 
             alt="PokeGroups"
             style={{ aspectRatio:'2.5/1', width: isMobile ? '35%' : '12%'}}
            />
            
            <Scrollbars style={{width: '50%'}}>
                <div className='header-nav-set'>
                    <NavLink path="/" name="Home"/>
                    <NavLink path="/sv" name="Scarlet / Violet"/>
                    <NavLink path="/pogo" name="Pokemon GO"/>
                    <NavLink path="/community" name="Community"/>
                </div>
            </Scrollbars>
            
            
            <div className='header-links'>
                <div><a style={{color:'pink'}}href="/about">About</a></div>
                <div><a style={{color:'pink'}}href="/account">Account</a></div>
                <div><a style={{color:'pink'}}href="/contribute">Contribute</a></div>
            </div>
        </div>
    )
}
export default AppHeader;