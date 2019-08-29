import React, { Component } from 'react';

import Spinner from '../Spinner';
import Error from '../Error';
import ErrorBoundary from '../ErrorBoundary';

const withItem = (View) => {
    return class extends Component {
        state = {
            item: null,
            image: null,
            loading: false,
            error: false
        };

        componentDidMount() {
            this.updateItem();
        }

        componentDidUpdate(prevProps) {
            if (prevProps.id !== this.props.id || prevProps.getData !== this.props.getData) {
                this.setState({ loading: true, error: false });
                this.updateItem();
            }
        }

        onError = () => {
            this.setState({
                error: true,
                loading: false
            });
        };

        updateItem = () => {
            const { id, getData, getImageUrl } = this.props;

            if (id) {
                getData(id)
                    .then(item => this.setState({
                        item,
                        image: getImageUrl(item),
                        loading: false,
                        error: false
                    }))
                    .catch(this.onError);
            }
        };

        render() {
            const { item, loading, error, image } = this.state;

            if (loading) {
                return (
                    <div className='item-details card'>
                        <Spinner />
                    </div>
                )
            }

            if (!item && !error) {
                return (
                    <div className='item-details card'>
                        <span>Select item from the list</span>
                    </div>
                )
            }

            if (error) {
                return (
                    <div className='item-details card'>
                        <Error />
                    </div>
                )
            }

            return (
                <ErrorBoundary>
                    <View {...this.props} item={ item } image={ image } />
                </ErrorBoundary>
            );
        }
    }
};

export default withItem;