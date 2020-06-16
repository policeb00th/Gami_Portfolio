import React from 'react';
import { NavLink } from 'react-router-dom'
const Footer = () => (
    <div className="footer_container">
        <div className="left_container">
            <p className="Go_to">Go to</p>
            <hr className="left_line" />
            <NavLink
                to='/UserInteraction'
                className="footer_links"
            >
                UI Design
            </NavLink>
            <NavLink to='/DaysOfType'
                className="footer_links"
            >
                36 days of type
                </NavLink>
            <NavLink to='/3D-design'
                className="footer_links"
            >
                General 3D designs
                </NavLink>
            <NavLink to='/Vintage'
                className="footer_links"
            >
                Vintage Posters
                </NavLink>
            <NavLink to='/GeneralPoster'
                className="footer_links"
            >
                General posters
                </NavLink>
        </div>
        <div className="right_container">
            <p className="Go_to_right"> Have a project to discuss?</p>
            <hr className="right_line" />
            <p className="Go_to_mail    "> Mail me at sgami444@gmail.com</p>
        </div>
        <div className="last_line_container">
        <img className="copyright" src='/images/copyright.png'/>
        <span className="copyright_text">Copyright Sahil Gami 2020</span>
        <span className="thanks">Special thanks to <a href="https://www.instagram.com/hey_atleast_someone/" target="blank" className="thanks_blue">Diptanshu Sinha</a> for developing this portfolio.</span>
        </div>
    </div>
)

export default Footer