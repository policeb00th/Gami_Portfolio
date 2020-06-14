import React from 'react';
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => (
    <div className="header">
        <h1 className="name">SAHIL GAMI</h1>
        <NavLink
        activeStyle={{
            textDecoration:'none',
            textAlign: "left",
            color: "#F29999",
            opacity: "1"
        }}
        exact={true}
            className="link"
            to='/'
        >
            Home
        </NavLink>
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

export default Header