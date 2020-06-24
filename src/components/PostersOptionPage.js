import React from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router-dom'
import OtherHeader from './OtherPagesHeader';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';


const PosterOptionPage = () => (
    <div>
        <OtherHeader />
        <p className="UI_Header">Posters</p>
        <div className="image_container_main">
            <div className="image_container_left" >
                <NavLink to="/Vintage">
                    <LazyLoad
                        placeholder={Loading}>
                        <img className="image_style" src="/images/PostersOption/Vintage.png" />
                    </LazyLoad>
                    <div className=" image_overlay_left">
                        <div className="image_text">
                            VINTAGE
                    </div>
                    </div>
                </NavLink>
            </div>
            <div className="image_container_right" >
                <NavLink to="/GeneralPoster">
                    <LazyLoad
                        placeholder={Loading}>
                        <img className="image_style" src="/images/PostersOption/General.png" />
                    </LazyLoad>
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