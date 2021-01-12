import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import { FaBars, FaTimes, FaMusic } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { Dropdown } from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const onMouseEnter = () => {
        if(window.innerWidth <= 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth <= 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <ScrollLink 
                            to ='home_hero-1' 
                            className="navbar-logo" 
                            onClick={closeMobileMenu}
                            smooth={true}
                            duration={1000}>
                            <FaMusic className='navbar-icon' />
                            GL Studio
                        </ScrollLink>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <ScrollLink 
                                    to='home_hero-1' 
                                    className="nav-links"
                                    onClick={closeMobileMenu} 
                                    smooth={true} 
                                    duration={1000}>
                                    Home
                                </ScrollLink>
                            </li>
                            <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                                <ScrollLink 
                                    to='home_hero-2' 
                                    className="nav-links"
                                    onClick={closeMobileMenu} 
                                    smooth={true} 
                                    duration={1000}>
                                    Serviços <AiFillCaretDown className="nav-links-service-icon" />
                                </ScrollLink>
                                {dropdown && <Dropdown />}
                            </li>
                            <li className="nav-item">
                            <ScrollLink 
                                    to='home_hero-3' 
                                    className="nav-links"
                                    onClick={closeMobileMenu} 
                                    smooth={true} 
                                    duration={1000}>
                                    Estrutura
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                            <ScrollLink 
                                    to='home__team-section' 
                                    className="nav-links"
                                    onClick={closeMobileMenu} 
                                    smooth={true} 
                                    duration={1000}>
                                    Equipe
                                </ScrollLink>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to = '/sign-up' className="btn-link">
                                        <Button buttonStyle='btn--outline'>TENHO UM CONVITE!</Button>
                                    </Link>
                                ) : (
                                    <Link to = '/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'>TENHO UM CONVITE!</Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>    
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
