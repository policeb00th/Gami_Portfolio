import React from 'react';
import ReactDOM from 'react-dom';
import AboutMeText from './AboutMeTextBox';

const AboutMeTextContainer= () =>(
    <div className="about_container">
        <AboutMeText pink_text="Working progress" hover_text="I tend to keep on iterating the concepts I use in every design 
        which helps me not to hold on to a single thinking process, making use of 3D software,animations, prototypes, illustrations
        minimalism,vintage look and just freestyling somethingis my way to go."/>
        <AboutMeText pink_text="What I do" hover_text="I have a good experience of around 2 years on poster making and user interaction 
        design by working for college chapters, teaching new design enthusiasts and internships, but recently 3D design and animation 
        has captured my attention and won't let me sleep at night."/>
        <AboutMeText pink_text="My Interests" hover_text="Apart from all this design work, I find myself having fun in reading some novels,
         gathering with my friends at my hometown Rajkot, Gujarat. Mostly I am away from my hometown for studies at Tamil Nadu where I 
         participate in college events and fests."/>
    </div>
)
export default AboutMeTextContainer