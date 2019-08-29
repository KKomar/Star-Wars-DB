import React, { Component } from 'react';

import './Planet.css';

export default class Planet extends Component {
    render() {
        const {id, name, population, rotationPeriod, diameter, gravity} = this.props.planet;
        console.log();

        return (
            <React.Fragment>
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     alt='Planet-icon'
                />
                <div>
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population:</span>
                            <span>{ population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period:</span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter:</span>
                            <span>{ diameter }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Gravity:</span>
                            <span>{ gravity }</span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
};