import React, {useState, useContext} from 'react';
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import {Link} from 'react-router-dom'

function Header() {
    const value = useContext(GlobalState)
    return (
    <header>
        <div className='menu'>
            <img src={Menu} alt='' width='30' />
        </div>

        <div className='logo'>
            <h1>
                <Link to="/">Frenchie Life</Link>
            </h1>
        </div>

        <ul>
            <li><Link to="/studs">Studs</Link></li>
            <li><Link to="/puppies">Puppies</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
 
        
    </header>
    );
}

export default Header;