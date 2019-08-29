import React, { Component } from 'react';

import './ItemDetails.css';

const Record = ({ item, label, field }) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }:</span>
            <span>{ item[field] || 'unknown' }</span>
        </li>
    );
};

export { Record };

export default class ItemDetails extends Component {
    render() {
        const { item, image } = this.props;

        const { name } = this.props.item;

        return (
            <div className='item-details card'>
                <img className="item-image"
                     src={ image }
                     alt='item-icon'
                />
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, child => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
};