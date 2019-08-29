import React from 'react';
import { withRouter } from 'react-router-dom';

import { PlanetList, PlanetDetails } from '../SWComponents';
import Row from '../Row';

const PlanetsPage = ({ history, match }) => {
    const { id } = match.params;

    return (
        <Row
            left={ <PlanetList onItemSelected={ (id) => history.push(id) } /> }
            right={ <PlanetDetails id={ id } /> }
        />
    )
};

export default withRouter(PlanetsPage);