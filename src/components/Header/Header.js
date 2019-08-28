import React from 'react';

import './Header.css';

const Header = () => {

    return (
        <div className='header d-flex'>
            <h3>
                <a href='#'>Star Wars DB</a>
            </h3>
            <ul className='d-flex'>
                <a href='#'><li>People</li></a>
                <a href='#'><li>Planets</li></a>
                <a href='#'><li>Starships</li></a>
                <a href='#'><li>Species</li></a>
            </ul>
        </div>
    )
};

export default Header;