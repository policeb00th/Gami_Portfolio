import React from 'react';
import Footer from './Footer';
import VintageGrid from './VintageGrid';
import OtherHeader from './OtherPagesHeader';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';
const Vintage = () => (
    <div>
        <OtherHeader />
        <p className="days_header">Vintage</p>
        <a className="anchorpad" href="http://www.behance.net/sgami444" target="_blank"><p className="behance">Visit me on behance!</p></a>
        <LazyLoad
            placeholder={Loading}>
            <VintageGrid />
        </LazyLoad>
        <Footer />
    </div>
)
export default Vintage