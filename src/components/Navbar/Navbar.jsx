import React from 'react';
import modules from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={modules.nav}>
        <div className={modules.item}><NavLink to="/profile" activeClassName={modules.activeLink}>Profile</NavLink></div>
        <div className={modules.item}><NavLink to="/messages" activeClassName={modules.activeLink}>Messages</NavLink></div>
        <div className={modules.item}><NavLink to="/users" activeClassName={modules.activeLink}>Users</NavLink></div>
        <div className={modules.item}><NavLink to="/music" activeClassName={modules.activeLink}>Music</NavLink></div>
        <div className={modules.item}><NavLink to="/settings" activeClassName={modules.activeLink}>Settings</NavLink></div>
    </nav>

}

export default Navbar;