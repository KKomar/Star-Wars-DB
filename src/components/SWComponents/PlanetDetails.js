import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withItem, withSwapi, compose } from '../hoc';

const mapMethodsToProps = swapi => {
    return {
        getData: swapi.getPlanet,
        getImageUrl: swapi.getPlanetImage
    }
};

const Planet = compose(
                    withSwapi(mapMethodsToProps),
                    withItem
               )(ItemDetails);

const PlanetDetails = ({ id }) => {
    return (
        <Planet id={ id } >
            <Record label='Diameter' field='diameter'/>
            <Record label='Population' field='population'/>
            <Record label='Orbital period' field='orbitalPeriod' />
            <Record label='Rotation period' field='rotationPeriod'/>
            <Record label='Climate' field='climate'/>
            <Record label='Terrain' field='terrain'/>
            <Record label='Gravity' field='gravity'/>
        </Planet>
    );
};

export default PlanetDetails;