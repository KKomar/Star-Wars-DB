import React from 'react';

import './Error.css';

import icon from './DeathStar.png';

const Error = () => {
    return (
        <div className='error'>
            <img src={icon} alt='Error icon' className='error-icon' />
            <span className='boom'>BOOM!</span>
            <span>Something gone wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    );
};

export default Error;