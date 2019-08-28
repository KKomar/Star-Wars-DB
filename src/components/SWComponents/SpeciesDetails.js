import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withItem, withSwapi } from '../hoc';

const mapMethodsToProps = swapi => {
    return {
        getData: swapi.getSpecies,
        getImageUrl: swapi.getSpeciesImage
    }
};

const Species = withSwapi(withItem(ItemDetails), mapMethodsToProps);

const SpeciesDetails = ({ id }) => {
    return (
        <Species id={ id } >
            <Record label='Language' field='language'/>
            <Record label='Designation' field='designation'/>
            <Record label='Classification' field='classification'/>
            <Record label='Average lifespan' field='averageLifespan'/>
            <Record label='Average height' field='averageHeight'/>
            <Record label='Hair colors' field='hairColors' />
            <Record label='Eye colors' field='eyeColors'/>
            <Record label='Skin colors' field='skinColors'/>
        </Species>
    );
};

export default SpeciesDetails;