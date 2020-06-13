import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import VintageGrid from './VintageGrid';
const GeneralPosterPage = () =>(
    <div>
    <Header></Header>
    <p className="days_header">General</p>
    <a className="anchorpad" href="http://www.behance.net/sgami444" target="_blank"><p className="behance">Visit me on behance!</p></a>
    <p className="construction" >Nothing to see here</p>
    <p className="coming_soon">Coming Soon</p>
    <Footer/>
    </div>
)
export default GeneralPosterPage