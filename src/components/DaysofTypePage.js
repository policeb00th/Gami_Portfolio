import React from 'react';
import Footer from './Footer';
import DaysOfTypeGrid from './DaysOfTypeGrid';
import OtherHeader from './OtherPagesHeader';
const DaysOfType = () =>(
    <div>
    <OtherHeader/>
    <p className="days_header">36 Days of type</p>
    <a className="anchorpad" href="http://www.behance.net/sgami444" target="_blank"><p className="behance">Visit me on behance!</p></a>
    <DaysOfTypeGrid/>
    <Footer/>
    </div>
)
export default DaysOfType