import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import VintageGrid from './VintageGrid';
const Vintage = () =>(
    <div>
    <Header></Header>
    <p className="days_header">Vintage</p>
    <a className="anchorpad" href="http://www.behance.net/sgami444" target="_blank"><p className="behance">Visit me on behance!</p></a>
    <VintageGrid/>
    <Footer/>
    </div>
)
export default Vintage