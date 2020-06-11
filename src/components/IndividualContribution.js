import React from 'react';
import ReactDOM from 'react-dom';

const IndividualContribution = (props) => (
    <div className={props.className}>
        <h1 className="contribution_individual_header">{props.organization}</h1>
        <h2 className="contribution_individual_position">{props.position} </h2>
    </div>
)

export default IndividualContribution