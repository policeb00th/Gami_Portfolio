import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import ContactMe from './ContactMe';

const HomePage=() =>(
    <div>
        <Header/>
        <Introduction/>
        <AboutMe/>
        <MyWork/>
        <ContactMe/>
    </div>
)
export default HomePage