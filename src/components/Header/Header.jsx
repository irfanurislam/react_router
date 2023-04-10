import React from 'react';
import {Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/Activelink';


const Header = () => {
   
    return (
        <div className='nav'>
            
            <ActiveLink to="/">home</ActiveLink>
            <ActiveLink to="/about">about</ActiveLink>
            <ActiveLink to="/contact">contact</ActiveLink>
            <ActiveLink to="/friend">friend</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            
        </div>
    );
};

export default Header;