import React, { useState } from 'react';
import { MenuItems } from './MenuItem';
import { Link as ScrollLink } from 'react-scroll';
import './Dropdown.css';

export function Dropdown(){
    const [click, setCLick] = useState(false)

    const handleClick = () => setCLick(!click)

    return(
        <>
            <ul onClick={handleClick}
            className={click ? 'dropdown-menu-clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <ScrollLink 
                                className={item.cName}
                                to={item.path}
                                onClick={() => setCLick(false)}
                                smooth={true}
                                duration={1000}>
                                {item.title}        
                            </ScrollLink>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}
