import React from 'react';
import { withRouter } from 'react-router-dom';

import { PersonList } from '../SWComponents';

const PeoplePage = ({ history }) => {
    return (
        <PersonList onItemSelected={ (id) => history.push(`/people/${id}`) } />
    )
};

export default withRouter(PeoplePage);