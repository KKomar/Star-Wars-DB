import React from 'react';
import { withRouter } from 'react-router-dom';

import { PlanetList } from '../SWComponents';

const PlanetsPage = ({ history }) => {
    return (
        <PlanetList onItemSelected={ (id) => history.push(id) } />
    )
};

export default withRouter(PlanetsPage);