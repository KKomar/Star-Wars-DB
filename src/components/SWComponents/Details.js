import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { itemData } from '../hoc';
import SwapiService from '../../services/swapi-service';
import { SwapiConsumer } from "../SwapiServiceContext";

const swapi = new SwapiService();

const { getPerson, getPlanet, getStarship, getSpecies,
        getPersonImage, getPlanetImage, getStarshipImage, getSpeciesImage } = swapi;

// const withChildFunction = (Wrapped, fn) => {
//     return (props) => {
//         return (
//             <Wrapped {...props} >
//                 { fn }
//             </Wrapped>
//         );
//     };
// };

const Person = itemData(ItemDetails, getPerson, getPersonImage);
const Planet = itemData(ItemDetails, getPlanet, getPlanetImage);
const Starship = itemData(ItemDetails, getStarship, getStarshipImage);
const Species = itemData(ItemDetails, getSpecies, getSpeciesImage);

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

export { PersonDetails, PlanetDetails, StarshipDetails, SpeciesDetails };