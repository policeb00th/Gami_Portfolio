import React from 'react';
import ReactDOM from 'react-dom';

const AboutMeText = (props) => (
    <div className="singleaboutme">
        <div data-pink={props.pink_text} data-hover={props.hover_text} className="pinktext">{props.pink_text}</div>
    </div>
)
export default AboutMeText