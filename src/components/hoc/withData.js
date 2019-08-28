import React, { Component } from 'react';

import Spinner from "../Spinner/Spinner";
import Error from '../Error/Error';

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        };

        componentDidMount() {
            getData()
                .then(data => this.setState({
                    data,
                    loading: false
                }))
                .catch(this.onError);
        }

        onError = () => {
            this.setState({
                error: true,
                loading: false
            });
        };

        render() {
            const { data, loading, error } = this.state;

            if (loading) {
                return (
                    <ul className='item-list list-group'>
                        <Spinner />
                    </ul>
                );
            }

            if (error) {
                return (
                    <ul className='item-list list-group'>
                        <Error />
                    </ul>
                );
            }

            return (
                <View {...this.props} data={ data } />
            );
        }
    }
};

export default withData;