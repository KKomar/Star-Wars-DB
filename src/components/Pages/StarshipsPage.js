import React, { Component } from 'react';

import { StarshipList, StarshipDetails } from '../SWComponents';
import Row from '../Row';

export default class StarshipsPage extends Component {
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
                left={ <StarshipList onItemSelected={ this.onItemSelected } /> }
                right={ <StarshipDetails id={ selectedItem } /> }
            />
        )
    }
}