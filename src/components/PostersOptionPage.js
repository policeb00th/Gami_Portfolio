import React from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router-dom'
import OtherHeader from './OtherPagesHeader';


const PosterOptionPage = () => (
    <div>
        <OtherHeader/>
        <p className="UI_Header">Posters</p>
        <div className="image_container_main">
            <div className="image_container_left" >
                <NavLink to="/Vintage">
                    <img className="image_style" src="/images/PostersOption/Vintage.png" />
                    <div className=" image_overlay_left">
                        <div className="image_text">
                            VINTAGE
                    </div>
                    </div>
                </NavLink>
            </div>
            <div className="image_container_right" >
                <NavLink to="/GeneralPoster">
                    <img className="image_style" src="/images/PostersOption/General.png" />
                    <div className=" image_overlay_right">
                        <div className="image_text">
                        GENERAL
                </div>
                    </div>
                </NavLink>
            </div>
        </div>
        <Footer />
    </div >
)
export default PosterOptionPage