import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import General3DGrid from './General3DGrid';
const General3DPage = () =>(
    <div>
    <Header></Header>
    <p className="days_header">General 3D designs</p>
    <General3DGrid/>
    <Footer/>
    </div>
)
export default General3DPage