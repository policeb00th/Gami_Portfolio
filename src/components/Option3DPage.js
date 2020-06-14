import React from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router-dom'
import OtherHeader from './OtherPagesHeader';


const Option3DPage = () => (
    <div>
        <OtherHeader/>
        <p className="UI_Header">3D Art</p>
        <div className="image_container_main">
            <div className="image_container_left" >
                <NavLink to="/DaysOfType">
                    <img className="image_style" src="/images/3DOptions/36_days_type.png" />
                    <div className=" image_overlay_left">
                        <div className="image_text">
                        36 DAYS <br/>OF TYPE
                    </div>
                    </div>
                </NavLink>
            </div>
            <div className="image_container_right" >
                <NavLink to="/3D-design">
                    <img className="image_style" src="/images/3DOptions/general_ 3d_designs.png" />
                    <div className=" image_overlay_right">
                        <div className="image_text">
                            GENERAL <br/>3D DESIGNS
                </div>
                    </div>
                </NavLink>
            </div>
        </div>
        <Footer />
    </div >
)
export default Option3DPage