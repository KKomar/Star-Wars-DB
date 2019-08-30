import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundary from '../ErrorBoundary';
import { PeoplePage, PlanetsPage, StarshipsPage, SpeciesPage, SecretPage, LoginPage } from '../Pages';

import SwapiService from '../../services/swapi-service';
import { SwapiProvider } from '../SwapiServiceContext';

import './App.css';

export default class App extends Component {
    state = {
        swapi: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    render() {
        const { swapi, isLoggedIn } = this.state;

        return (
            <ErrorBoundary>
                <SwapiProvider value={ swapi } >
                    <Router>
                        <div className='app'>
                            <Header />
                            <RandomPlanet />

                            <Switch>
                                <Route exact path='/' render={() => <h2>Welcome to Star Wars DB!</h2>} />
                                <Route exact path='/people/:id?' component={ PeoplePage } />
                                <Route exact path='/planets/:id?' component={ PlanetsPage } />
                                <Route exact path='/starships/:id?' component={ StarshipsPage } />
                                <Route exact path='/species/:id?' component={ SpeciesPage } />
                                <Route exact path='/secret' render={() =>
                                    <SecretPage isLoggedIn={ isLoggedIn } />}
                                />
                                <Route exact path='/login' render={() =>
                                    <LoginPage
                                        onLogin={ this.onLogin }
                                        isLoggedIn={ isLoggedIn } />}
                                />
                                <Route render={() => <h2 className='jumbotron'>404 Page not found</h2>} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiProvider>
            </ErrorBoundary>
        )
    }
};