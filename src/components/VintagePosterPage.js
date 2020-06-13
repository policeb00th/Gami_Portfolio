import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import VintageGrid from './VintageGrid';
const Vintage = () =>(
    <div>
    <Header></Header>
    <p className="days_header">Vintage</p>
    <VintageGrid/>
    <Footer/>
    </div>
)
export default Vintage