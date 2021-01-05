import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMusic  } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

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
                        <Link to ='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <FaMusic className='navbar-icon' />
                            GL Studio
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                    Serviços
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/structure' className="nav-links" onClick={closeMobileMenu}>
                                    Estrutura
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/team' className="nav-links" onClick={closeMobileMenu}>
                                    Equipe
                                </Link>
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
