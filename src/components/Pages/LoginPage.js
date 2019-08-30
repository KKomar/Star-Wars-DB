import React from 'react';

const LoginPage = ({ isLoggedIn, onLogin }) => {
    if (isLoggedIn) {
        return <h3 className='jumbotron'>You are logged in</h3>
    }

    return(
        <div className='jumbotron'>
            <h3>Login to see secret page</h3>
            <button
                className='btn btn-primary btn-lg'
                onClick={ onLogin }
            >
                Login
            </button>
        </div>
    )
};

export default LoginPage;