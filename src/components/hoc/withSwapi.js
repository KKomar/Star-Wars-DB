import React from 'react';

import { SwapiConsumer } from '../SwapiServiceContext';

const withSwapi = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        console.log(props)
        return (
            <SwapiConsumer>
                {
                    swapi => {
                        const serviceProps = mapMethodsToProps(swapi);
                        return <Wrapped {...props} {...serviceProps} />
                    }
                }
            </SwapiConsumer>
        );
    };
};

export default withSwapi;