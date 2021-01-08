import React, { useState, useEffect } from 'react';
import './Pagenotfound.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaMusic,
  FaBars, 
  FaTimes, 
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Dropdown } from '../../Dropdown';
import { AiFillCaretDown } from 'react-icons/ai';

export default function Pagenotfound() {
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
                        <Link to='/' className='social-logo'>
                          <FaMusic className='navbar-icon' />
                          GL Studio
                        </Link>
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
                                    to='home_hero-4' 
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
                <div className='footer-container'>
                  <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                      Página não encontrada
                    </p>
                    <p className='footer-subscription-text'>
                      Deixe seu email, vamos trocar uma ideia.
                    </p>
                    <div className='input-areas'>
                      <form>
                        <input
                          className='footer-input'
                          name='email'
                          type='email'
                          placeholder='Seu melhor email'
                        />
                        <Button buttonStyle='btn--outline'>Inscreva-se</Button>
                      </form>
                    </div>
                  </section>
                  <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                      <div className='footer-link-items'>
                        <h2>Sobre nós</h2>
                        <Link to='/sign-up'>Sobre Nós</Link>
                        <Link to='/'>Portfólio</Link>
                      </div>
                      <div className='footer-link-items'>
                        <h2>Contate a gente</h2>
                        <Link to='/'>Email</Link>
                        <Link to='/'>Whatsapp</Link>
                      </div>
                    </div>
                  </div>
                  <section className='social-media'>
                    <div className='social-media-wrap'>
                      <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                          <FaMusic className='navbar-icon' />
                          GL Studio
                        </Link>
                      </div>
                      <small className='website-rights'>GL Studio © 2021</small>
                      <div className='social-icons'>
                        <Link
                          className='social-icon-link'
                          to='/'
                          target='_blank'
                          aria-label='Facebook'
                        >
                          <FaFacebook />
                        </Link>
                        <Link
                          className='social-icon-link'
                          to='/'
                          target='_blank'
                          aria-label='Instagram'
                        >
                          <FaInstagram />
                        </Link>
                        <Link
                          className='social-icon-link'
                          to={
                            '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                          }
                          target='_blank'
                          aria-label='Youtube'
                        >
                          <FaYoutube />
                        </Link>
                        <Link
                          className='social-icon-link'
                          to='/'
                          target='_blank'
                          aria-label='Twitter'
                        >
                          <FaTwitter />
                        </Link>
                        <Link
                          className='social-icon-link'
                          to='/'
                          target='_blank'
                          aria-label='LinkedIn'
                        >
                          <FaLinkedin />
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
            </IconContext.Provider>
        </>
    )
}

