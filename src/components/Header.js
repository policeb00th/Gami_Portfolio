import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
const HomeHeader = () => (
    <div className="header">
        <h1 className="name">SAHIL GAMI</h1>
        <Link
            className="link"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact={true}
            to='top'
        >
            Home
        </Link>
        <Link
            className="link"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            About me
        </Link>
        <Link
            className="link"
            to="mywork"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            My Work
        </Link>
        <Link
            activeClass="active"
            className="link__last"
            to="contactme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            Contact me
        </Link>
    </div>

)

export default HomeHeader