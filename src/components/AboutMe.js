import React from 'react';
import ReactDOM from 'react-dom';
import AboutMeTextContainer from './AboutMeTextContainer';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';

const AboutMe = () => (
    <div>
        <p id="aboutme" className="aboutme">About Me</p>
        <LazyLoad
            placeholder={Loading}>
            <img className="about_img" src="/images/photo-gray.png" />
        </LazyLoad>
        <AboutMeTextContainer />
    </div>
)
export default AboutMe