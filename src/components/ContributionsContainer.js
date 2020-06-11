import React from 'react';
import ReactDOM from 'react-dom';
import IndividualContribution from './IndividualContribution';

const ContributionsContainer = () =>(
    <div className="container_contribution">
        <IndividualContribution className="contribution_left" organization="PUNAR HEALTHCARE" position="intern"/>
        <IndividualContribution className="contribution_right" organization="VinnovateIT" position="UI/UX head"/>
        <IndividualContribution className="contribution_left" organization="RIVIERA '20" position="Coordinator"/>
        <IndividualContribution className="contribution_right" organization="Code 2 Create" position="Intern"/>
        <IndividualContribution className="contribution_center" organization="Apple Developers Group" position="Core committee design member"/>

    </div>
)

export default ContributionsContainer