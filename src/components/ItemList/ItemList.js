import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = props => {
    const { data, children: renderLabel, onItemSelected } = props;

    return (
        <ul className='item-list list-group'>
            {
                data.map(item => {
                    const { id } = item;
                    const label = renderLabel(item);

                    return (
                        <li className='list-group-item'
                            key={ id }
                            onClick={() => onItemSelected(id)}
                        >
                            { label }
                        </li>
                    );
                })
            }
        </ul>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
    onItemSelected: PropTypes.func
};

export default ItemList;