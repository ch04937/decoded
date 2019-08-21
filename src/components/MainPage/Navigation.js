import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationStyle } from './StyledWidgets';

export default function Navigation() {
    return(
        <div style={NavigationStyle}>
            <Link to='/'>
                <p> Home </p>
            </Link>
            <Link to='/contact-us'>
                <p> Contact Us </p>
            </Link>
            <Link to='/about'>
                <p> About </p>
            </Link>
            <Link to='/music'>
                <p> Music </p>
            </Link>
            <Link to='/meet-the-team'>
                <p> Mee the team </p>
            </Link>
            <Link to='/sign-up'>
                <p>Sing-up</p>
            </Link>

        </div>

    )
}