import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
const HomeHeader = () => (
    <div className="header">
        <h1 className="name">SAHIL GAMI</h1>
        <Link
             className="link"
             activeClass="active"
             to="top"
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}
        >
            Home
        </Link>
        <Link
            className="link"
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            About me
        </Link>
        <Link
            activeClass="active"
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