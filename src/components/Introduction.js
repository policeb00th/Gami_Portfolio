import React from 'react';
import ReactDOM from 'react-dom';
import IconList from './SocialMediaIconList';
import IntroductionContent from './IntroductionContent';

const Introduction= () => (
    <div id="top">
        <img className='face_img' src="/images/sahil_cropped.png"/>
        <IntroductionContent/>
      <IconList/>
    </div>
)

export default Introduction