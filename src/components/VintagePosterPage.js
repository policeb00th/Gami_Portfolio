import React from 'react';
import Footer from './Footer';
import VintageGrid from './VintageGrid';
import OtherHeader from './OtherPagesHeader';
const Vintage = () =>(
    <div>
    <OtherHeader/>
    <p className="days_header">Vintage</p>
    <a className="anchorpad" href="http://www.behance.net/sgami444" target="_blank"><p className="behance">Visit me on behance!</p></a>
    <VintageGrid/>
    <Footer/>
    </div>
)
export default Vintage