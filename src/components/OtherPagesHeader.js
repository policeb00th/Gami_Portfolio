import React from 'react';
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
const OtherHeader = () => (
    <div className="header">
        <h1 className="name">SAHIL GAMI</h1>
        <NavLink
            exact={true}
            className="link"
            to='/'
        >
            Home
        </NavLink>
        <NavLink
            exact={true}
            className="link"
            to='/'
        >
            About me
        </NavLink>
        <Link
            className="link_pink"
            to="contactme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            My Work
        </Link>
        <NavLink
            exact={true}
            className="link__last"
            to='/'
        >
            Contact me
        </NavLink>
    </div>

)

export default OtherHeader