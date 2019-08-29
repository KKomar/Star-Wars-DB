import React from 'react';

import './Header.css';

const Header = ({ onServiceChange }) => {

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
            <button type='button'
                    className='btn btn-secondary'
                    onClick={ onServiceChange }
            >
                Change service
            </button>
        </div>
    )
};

export default Header;