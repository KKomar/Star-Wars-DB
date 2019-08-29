import React, { Component } from 'react';

import { PersonDetails, PersonList } from '../SWComponents';
import Row from '../Row';

export default class PeoplePage extends Component {
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
                left={ <PersonList onItemSelected={ this.onItemSelected } /> }
                right={ <PersonDetails id={ selectedItem } /> }
            />
        )
    }
}