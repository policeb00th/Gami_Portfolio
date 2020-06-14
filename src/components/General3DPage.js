import React from 'react';
import Footer from './Footer';
import General3DGrid from './General3DGrid';
import OtherHeader from './OtherPagesHeader';
const General3DPage = () =>(
    <div>
    <OtherHeader/>
    <p className="days_header">General 3D designs</p>
    <a className="anchorpad" href="http://www.behance.net/sgami444" target="_blank"><p className="behance">Visit me on behance!</p></a>
    <General3DGrid/>
    <Footer/>
    </div>
)
export default General3DPage