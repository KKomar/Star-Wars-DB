import React from 'react';
import { withRouter } from 'react-router-dom';

import { SpeciesList } from '../SWComponents';

const SpeciesPage = ({ history }) => {
    return (
        <SpeciesList onItemSelected={ (id) => history.push(`/species/${id}`) } />
    )
};

export default withRouter(SpeciesPage);