import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {

    return (
        <div className='header d-flex'>
            <h3>
                <Link to='/'>Star Wars DB</Link>
            </h3>
            <ul className='d-flex'>
                <Link to='/people/'><li>People</li></Link>
                <Link to='/planets/'><li>Planets</li></Link>
                <Link to='/starships/'><li>Starships</li></Link>
                <Link to='/species/'><li>Species</li></Link>
                <Link to='/secret'><li>Secret</li></Link>
                <Link to='/login'><li>Login</li></Link>
            </ul>
        </div>
    )
};

export default Header;