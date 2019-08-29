import React, { Component } from 'react';

import Spinner from '../Spinner';
import Error from '../Error';
import ErrorBoundary from '../ErrorBoundary';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        };

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.props.getData()
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
                <ErrorBoundary>
                    <View {...this.props} data={ data } />
                </ErrorBoundary>
            );
        }
    }
};

export default withData;