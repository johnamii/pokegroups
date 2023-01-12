import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import Scrollbars from 'react-custom-scrollbars-2'
import { HamburgerIcon, InfoOutlineIcon } from '@chakra-ui/icons';

const NavLink = (props) => {
    const [background, setBackground] = useState("inherit");
    const location = useLocation();

    const linkStyles = {
        backgroundColor: background,
        color: location.pathname === props.path ? "#CE3838": "white",
        borderBottom: location.pathname === props.path ? "4px solid #CE3838" : "none",
        fontSize: isMobile ? '.9rem' : '1.15rem',
        paddingLeft:  isMobile ? '1em' : '1em',
        paddingRight: isMobile ? '1em' : '1em'
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
  
const MobileLinkPopup = (props) => {

    const content = 
    props.type === 'tabs' ?
    <>
    <Link to="/"><div className='mobile-link-button'>Home</div></Link>
    <Link to="/sv"><div className='mobile-link-button'>Scarlet and Violet</div></Link>
    <Link to="/pogo"><div className='mobile-link-button'>Pokemon GO</div></Link>
    <Link to="/community"><div className='mobile-link-button'>Community</div></Link>
    </>
    :
    props.type === 'info' ?
    <>
        <Link to="/about"><div className='mobile-link-button'>About</div></Link>
        <Link to="/account"><div className='mobile-link-button'>Account</div></Link>
        <Link to="/contribute"><div className='mobile-link-button'>Contribute</div></Link>
    </>
    :
    <>
        
    </>

    return (
        <div className='mobile-link-popup'>
            { content }
        </div>
    )
}

const AppHeader = () => {

    const [mobilePopup, setMobilePopup] = useState('none');
    const navigate = useNavigate();

    function handleMobilePopup(val) {
        mobilePopup === val ? setMobilePopup('none') : setMobilePopup(val);
    }

    const headerContent = isMobile ?
    <>
        <button className='mobile-header-button' onClick={() => handleMobilePopup('tabs')}>
            <HamburgerIcon 
            color="#F0F0F0"
            boxSize="25"
            />
        </button>
        <button className='mobile-header-button' onClick={() => handleMobilePopup('info')}>
            <InfoOutlineIcon
            color="#F0F0F0"
            boxSize="25"
            />
        </button>
        <MobileLinkPopup type={mobilePopup}/>
    </>
    :
    <>
        <Scrollbars style={{width:'40%'}}>
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
    </>


    return (
        <div className='app-header'>
            <img 
             className="header-logo" 
             src="/pokegroups-logo.png" 
             alt="PokeGroups"
             onClick={() => navigate('/')}
            />
            {headerContent}
        </div>
    )
}
export default AppHeader;