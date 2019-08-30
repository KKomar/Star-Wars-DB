import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundary from '../ErrorBoundary';
import { PeoplePage, PlanetsPage, StarshipsPage, SpeciesPage } from '../Pages';

import SwapiService from '../../services/swapi-service';
import { SwapiProvider } from '../SwapiServiceContext';

import './App.css';

export default class App extends Component {
    state = {
        swapi: new SwapiService()
    };

    render() {
        return (
            <ErrorBoundary>
                <SwapiProvider value={ this.state.swapi } >
                    <Router>
                        <div className='app'>
                            <Header />
                            <RandomPlanet />

                            <Route exact path='/' render={() => <h2>Welcome to Star Wars DB!</h2>} />

                            <Route path='/people/:id?' component={ PeoplePage } />
                            <Route exact path='/planets/:id?' component={ PlanetsPage } />
                            <Route exact path='/starships/:id?' component={ StarshipsPage } />
                            <Route exact path='/species/:id?' component={ SpeciesPage } />
                        </div>
                    </Router>
                </SwapiProvider>
            </ErrorBoundary>
        )
    }
};