import React, { Component } from 'react';

export default class ErrorButton extends Component {
    state = {
        renderError: false
    };

    render() {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button className="error-button btn btn-danger btn-lg"
                    onClick={() => this.setState({ renderError: true })}
                    style={{minHeight: '3rem', maxHeight: '6rem'}}
            >
                Throw Error
            </button>
        );
    }
}