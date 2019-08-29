import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundary from '../ErrorBoundary';
import { PeoplePage, PlanetsPage, StarshipsPage, SpeciesPage } from '../Pages';

import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';
import { SwapiProvider } from '../SwapiServiceContext';

import './App.css';

export default class App extends Component {
    state = {
        swapi: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapi }) => {
            const Service = swapi instanceof SwapiService ? DummySwapiService : SwapiService;

            return {
                swapi: new Service()
            };
        });
    };

    render() {
        return (
            <ErrorBoundary>
                <SwapiProvider value={ this.state.swapi } >
                    <div className='app'>
                        <Header onServiceChange={this.onServiceChange} />
                        <RandomPlanet />

                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />
                        <SpeciesPage />
                    </div>
                </SwapiProvider>
            </ErrorBoundary>
        )
    }
};