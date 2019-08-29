import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList, StarshipDetails } from '../SWComponents';
import Row from '../Row';

const StarshipsPage = ({ history, match }) => {
    const { id } = match.params;

    return (
        <Row
            left={ <StarshipList onItemSelected={ (id) => history.push(id) } /> }
            right={ <StarshipDetails id={ id } /> }
        />
    )
};

export default withRouter(StarshipsPage);