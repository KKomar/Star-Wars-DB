import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withItem, withSwapi } from '../hoc';

const mapMethodsToProps = swapi => {
    return {
        getData: swapi.getPerson,
        getImageUrl: swapi.getPersonImage
    }
};

const Person = withSwapi(mapMethodsToProps)(withItem(ItemDetails));

const PersonDetails = ({ id }) => {
    return (
        <Person id={ id } >
            <Record label='Gender' field='gender' />
            <Record label='Birth Year' field='birthYear' />
            <Record label='Eye Color' field='eyeColor' />
            <Record label='Height' field='height' />
            <Record label='Mass' field='mass' />
        </Person>
    );
};

export default PersonDetails;