import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ onServiceChange }) => {

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