import React from 'react';
import ReactDOM from 'react-dom';
import IconList from './SocialMediaIconList';
import IntroductionContent from './IntroductionContent';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';

const Introduction = () => (
  <div className="div_wrapper" id="top">
    <LazyLoad
      placeholder={Loading}>
      <img className='face_img' src="/images/sahil_cropped.png" />
    </LazyLoad>
    <IntroductionContent />
    <IconList />
  </div>
)

export default Introduction