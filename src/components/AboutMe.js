import React from 'react';
import ReactDOM from 'react-dom';
import AboutMeTextContainer from './AboutMeTextContainer';

const AboutMe=() =>(
    <div>
    <p  className="aboutme">About Me</p>    
    <img className="about_img" src="/images/photo-gray.png"/>
    <AboutMeTextContainer/>
    </div>
)
export default AboutMe