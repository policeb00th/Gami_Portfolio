import React from 'react';
import ReactDOM from 'react-dom';
import FacebookIcon from '../../assets/facebook.svg'
import MailIcon from '../../assets/mail.svg'
import BehanceIcon from '../../assets/behance-logo.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstaIcon from '../../assets/instagram.svg'


const IconListStatefull= () => (
    <div className="Icon_display">
        <p data-anti="ANTI" data-social="SOCIAL" className="social">SOCIAL</p>
        <a href="http://www.behance.net/sgami444" target="_blank"><BehanceIcon className="Icon" /></a>
        <a href="#"><MailIcon className="Icon" /></a>
        <a href="https://www.linkedin.com/in/sgami444/" target="_blank"><LinkedinIcon className="Icon" /></a>
        <a href="https://www.instagram.com/des_ui_gner/" target="_blank"><InstaIcon className="Icon" /></a>
        <a href="https://www.facebook.com/profile.php?id=100009078723667" target="_blank"><FacebookIcon className="Icon" /></a>
    </div>

)
export default IconListStatefull