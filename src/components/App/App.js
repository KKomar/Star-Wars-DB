import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundary from '../ErrorBoundary';
import { PeoplePage, PlanetsPage, StarshipsPage, SpeciesPage } from '../Pages';
import { PersonDetails, PlanetDetails, StarshipDetails, SpeciesDetails } from '../SWComponents';

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
                    <Router>
                        <div className='app'>
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />

                            <Route exact path='/' render={() => <h2>Welcome to Star Wars DB!</h2>} />

                            <Route exact path='/people' component={ PeoplePage } />
                            <Route path='/people/:id' render={({ match }) => {
                                const { id } = match.params;
                                return <PersonDetails id={id} />
                            }} />

                            <Route exact path='/planets' component={ PlanetsPage } />
                            <Route path='/planets/:id' render={({ match }) => {
                                const { id } = match.params;
                                return <PlanetDetails id={id} />
                            }} />

                            <Route exact path='/starships' component={ StarshipsPage } />
                            <Route path='/starships/:id' render={({ match }) => {
                                const { id } = match.params;
                                return <StarshipDetails id={id} />
                            }} />

                            <Route exact path='/species' component={ SpeciesPage } />
                            <Route path='/species/:id' render={({ match }) => {
                                const { id } = match.params;
                                return <SpeciesDetails id={id} />
                            }} />
                        </div>
                    </Router>
                </SwapiProvider>
            </ErrorBoundary>
        )
    }
};