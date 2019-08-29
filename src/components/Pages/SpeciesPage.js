import React, { Component } from 'react';

import { SpeciesList, SpeciesDetails } from '../SWComponents';
import Row from '../Row';

export default class SpeciesPage extends Component {
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
                left={ <SpeciesList onItemSelected={ this.onItemSelected } /> }
                right={ <SpeciesDetails id={ selectedItem } /> }
            />
        )
    }
}