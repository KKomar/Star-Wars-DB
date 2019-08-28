import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import { PersonList, SpeciesList, StarshipList, PlanetList,
         PersonDetails, SpeciesDetails, PlanetDetails, StarshipDetails
} from '../SWComponents';
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import SwapiService from '../../services/swapi-service';
import { SwapiProvider } from '../SwapiServiceContext';

import './App.css';
import Row from "../Row/Row";

export default class App extends Component {
    swapi = new SwapiService();

    render() {
        return (
            <ErrorBoundary>
                <SwapiProvider value={ this.swapi } >
                    <div className='app'>
                        <Header />
                        <RandomPlanet />
                        <ErrorButton />
                        <PersonList />
                        {/*<PlanetList />*/}
                        {/*<StarshipList/>*/}
                        {/*<SpeciesList/>*/}
                        <PersonDetails id={13} />
                        {/*<SpeciesDetails id={5} />*/}
                        {/*<PlanetDetails id={9}/>*/}
                        {/*<StarshipDetails id={9}/>*/}
                        {/*<Row left={personDetails} right={starshipDetails}/>*/}
                    </div>
                </SwapiProvider>
            </ErrorBoundary>
        )
    }
};