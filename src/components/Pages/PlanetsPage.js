import React, { Component } from 'react';

import { PlanetList, PlanetDetails } from '../SWComponents';
import Row from '../Row';

export default class PlanetsPage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        const { selectedItem } = this.state;

        return (
            <Row
                left={ <PlanetList onItemSelected={ this.onItemSelected } /> }
                right={ <PlanetDetails id={ selectedItem } /> }
            />
        )
    }
}