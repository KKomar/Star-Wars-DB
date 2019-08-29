import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withItem, withSwapi, compose } from '../hoc';

const mapMethodsToProps = swapi => {
    return {
        getData: swapi.getStarship,
        getImageUrl: swapi.getStarshipImage
    }
};

const Starship = compose(
                    withSwapi(mapMethodsToProps),
                    withItem
                 )(ItemDetails);

const StarshipDetails = ({ id }) => {
    return (
        <Starship id={ id } >
            <Record label='Model' field='model'/>
            <Record label='Starship class' field='starshipClass' />
            <Record label='Manufacturer' field='manufacturer'/>
            <Record label='Cost' field='costInCredits'/>
            <Record label='Length' field='length'/>
            <Record label='Crew' field='crew'/>
            <Record label='Cargo Capacity' field='cargoCapacity'/>
        </Starship>
    );
};

export default StarshipDetails;