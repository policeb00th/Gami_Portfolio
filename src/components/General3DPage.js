import React from 'react';
import Footer from './Footer';
import General3DGrid from './General3DGrid';
import OtherHeader from './OtherPagesHeader';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';
const General3DPage = () => (
    <div>
        <OtherHeader />
        <p className="days_header">General 3D designs</p>
        <a className="anchorpad" href="http://www.behance.net/sgami444" target="_blank"><p className="behance">Visit me on behance!</p></a>
        <LazyLoad
            placeholder={Loading}>
            <General3DGrid />
        </LazyLoad>
        <Footer />
    </div>
)
export default General3DPage