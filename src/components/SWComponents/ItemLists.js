import React from 'react';

import ItemList from '../ItemList/ItemList';
import { withData } from '../hoc';
import SwapiService from '../../services/swapi-service';

const swapi = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships, getAllSpecies } = swapi;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props} >
                { fn }
            </Wrapped>
        );
    };
};

const renderNameAndBirth = item => <span>{ item.name }<span className="info">({ item.birthYear })</span></span>;
const renderNameAndTerrain = item => <span>{ item.name }<span className="info">({ item.rotationPeriod })</span></span>;
const renderNameAndModel = item => <span>{ item.name }<span className="info">({ item.model })</span></span>;
const renderNameAndLanguage = item => <span>{ item.name }<span className="info">({ item.language })</span></span>;

const PersonList = withData(withChildFunction(ItemList, renderNameAndBirth), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, renderNameAndTerrain), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderNameAndModel), getAllStarships);
const SpeciesList = withData(withChildFunction(ItemList, renderNameAndLanguage), getAllSpecies);

export {
    PersonList,
    PlanetList,
    StarshipList,
    SpeciesList
};