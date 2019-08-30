import React from 'react';
import { Redirect } from 'react-router-dom';

import secretInfo from '../../services/secret-info';

const SecretPage = ({ isLoggedIn }) => {
    if (!isLoggedIn) {
        return <Redirect to='/login' />
    }

    return(
        <div className='jumbotron'>
            <h1>Hidden Star Wars details</h1>
            {
                secretInfo.map(item => {
                    return (
                        <React.Fragment>
                            <h3>{ item.title }</h3>
                            <p>{ item.text }</p>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
};

export default SecretPage;