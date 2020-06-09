import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Gallery from 'react-grid-gallery';
import DaysOfTypeGrid from './DaysOfTypeGrid';
const DaysOfType = () =>(
    <div>
    <Header></Header>
    <p className="days_header">36 Days of type</p>
    <DaysOfTypeGrid/>
    </div>
)
export default DaysOfType