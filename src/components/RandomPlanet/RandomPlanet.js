import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import Spinner from '../Spinner';
import Planet from './Planet';
import Error from '../Error';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    swapi = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 1;

        this.swapi.getPlanet(id).then(planet => this.setState({
            planet,
            loading: false,
            error: false
        }))
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                {
                    error
                        ? <Error />
                        : loading
                            ? <Spinner />
                            : <Planet planet={planet} />
                }
            </div>
        )
    }
};