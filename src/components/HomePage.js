import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import ContactMe from './ContactMe';
import Footer from './Footer';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';

const HomePage = () => (
    <div>
        <Header />
        <Introduction />
        <LazyLoad
            placeholder={Loading}>
            <AboutMe />
        </LazyLoad>
        <LazyLoad
            placeholder={Loading}>
            <MyWork />
        </LazyLoad>
        <LazyLoad
            placeholder={Loading}>
            <ContactMe />
        </LazyLoad>
        <Footer />
    </div>
)
export default HomePage