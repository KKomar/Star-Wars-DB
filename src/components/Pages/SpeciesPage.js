import React from 'react';
import { withRouter } from 'react-router-dom';

import { SpeciesList, SpeciesDetails } from '../SWComponents';
import Row from '../Row';

const SpeciesPage = ({ history, match }) => {
    const { id } = match.params;

    return (
        <Row
            left={ <SpeciesList onItemSelected={ (id) => history.push(id) } /> }
            right={ <SpeciesDetails id={ id } /> }
        />
    )
};

export default withRouter(SpeciesPage);