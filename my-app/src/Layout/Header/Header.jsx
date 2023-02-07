import React from 'react';
import {Link,useLocation,NavLink} from 'react-router-dom'
const Header = () => {
    const {pathname} = useLocation()
   
        
    
    return (
        <header className='header'>
            <div className="container">
            <ul className='header__list'>
                <li className='header__list-item'><NavLink className='header__link' to="/">Home</NavLink></li>
                <li className='header__list-item'><Link className={`header__link ${pathname === '/contact' ? 'header__link-active' : ''}`} to="/contact">Contact</Link></li>
                <li className='header__list-item'><Link className={`header__link ${pathname === '/about' ? 'header__link-active' : ''}`} to="/about">About</Link></li>
                <li className='header__list-item'><Link className={`header__link ${pathname === '/login' ? 'header__link-active' : ''}`} to="/login">Login</Link></li>
             </ul>
            </div>
        </header>
    );
}

export default Header;
