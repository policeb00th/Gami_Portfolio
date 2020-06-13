import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import DaysOfTypeGrid from './DaysOfTypeGrid';
const DaysOfType = () =>(
    <div>
    <Header></Header>
    <p className="days_header">36 Days of type</p>
    <a className="anchorpad" href="http://www.behance.net/sgami444" target="_blank"><p className="behance">Visit me on behance!</p></a>
    <DaysOfTypeGrid/>
    <Footer/>
    </div>
)
export default DaysOfType