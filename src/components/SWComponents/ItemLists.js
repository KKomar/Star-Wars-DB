import React from 'react';

import ItemList from '../ItemList/ItemList';
import { withData, withSwapi } from '../hoc';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props} >
                { fn }
            </Wrapped>
        );
    };
};

const mapPersonMethodsToProps = swapi => {
    return {
        getData: swapi.getAllPeople
    }
};

const mapPlanetMethodsToProps = swapi => {
    return {
        getData: swapi.getAllPlanets
    }
};

const mapStarshipMethodsToProps = swapi => {
    return {
        getData: swapi.getAllStarships
    }
};

const mapSpeciesMethodsToProps = swapi => {
    return {
        getData: swapi.getAllSpecies
    }
};

const renderNameAndBirth = item => <span>{ item.name }<span className="info">({ item.birthYear })</span></span>;
const renderNameAndTerrain = item => <span>{ item.name }<span className="info">({ item.rotationPeriod })</span></span>;
const renderNameAndModel = item => <span>{ item.name }<span className="info">({ item.model })</span></span>;
const renderNameAndLanguage = item => <span>{ item.name }<span className="info">({ item.language })</span></span>;

const PersonList = withSwapi(
                        withData(
                            withChildFunction(ItemList, renderNameAndBirth)
                        ),
                        mapPersonMethodsToProps
                   );

const PlanetList = withSwapi(
                        withData(
                            withChildFunction(ItemList, renderNameAndTerrain)
                        ),
                        mapPlanetMethodsToProps
                   );

const StarshipList = withSwapi(
                        withData(
                            withChildFunction(ItemList, renderNameAndModel)
                        ),
                        mapStarshipMethodsToProps
                     );

const SpeciesList = withSwapi(
                        withData(
                            withChildFunction(ItemList, renderNameAndLanguage)
                        ),
                        mapSpeciesMethodsToProps
                    );

export {
    PersonList,
    PlanetList,
    StarshipList,
    SpeciesList
};