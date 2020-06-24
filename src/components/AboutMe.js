import React from 'react';
import ReactDOM from 'react-dom';
import AboutMeTextContainer from './AboutMeTextContainer';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';

const AboutMe = () => (
    <div id="aboutme">
        <p className="aboutme">About Me</p>
        <img className="about_img" src="/images/photo-gray.png" />
        <AboutMeTextContainer />
    </div>
)
export default AboutMe