import React from 'react';
import Footer from './Footer';
import OtherPagesHeader from './OtherPagesHeader';

const UserInteractionPage = () => (
    <div>
        <OtherPagesHeader/>
        <p className="UI_Header">User <br/><span className="UI_small">Interaction</span></p>
        <div className="image_container_main">
            <div className="image_container_left" >
                <a href="http://www.behance.net/sgami444" target="_blank">
                    <img className="image_style" src="/images/UserInteraction/architect.png" />
                    <div className=" image_overlay_left">
                        <div className="image_text">
                            ARCHITECT PORTFOLIO
                    </div>
                    </div>
                </a>
            </div>
            <div className="image_container_right" >
                <a href="http://www.behance.net/sgami444" target="_blank">
                    <img className="image_style" src="/images/UserInteraction/punar_healthcare.png" />
                    <div className=" image_overlay_right">
                        <div className="image_text">
                            PUNAR HEALTHCARE
                </div>
                    </div>
                </a>
            </div>
        </div>
        <Footer />
    </div >
)
export default UserInteractionPage