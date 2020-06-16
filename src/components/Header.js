import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
const HomeHeader = () => (
    <div className="header">
        <h1 className="name">
            <Link
            activeClass="none"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <svg className="svg-rect">
                    <rect x="0" y="0" fill="none" width="19.6rem" height="6rem" />
                </svg>
      SAHIL GAMI
      </Link>
        </h1>
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