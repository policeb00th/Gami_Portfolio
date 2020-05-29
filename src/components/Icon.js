import React from 'react';
import ReactDOM from 'react-dom';
import FacebookIcon from '../../assets/facebook.svg'
import MailIcon from '../../assets/mail.svg'
import BehanceIcon from '../../assets/behance-logo.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstaIcon from '../../assets/instagram.svg'
const Icon = (props) =>(
    <div className="Icons">
    <a href="#"><BehanceIcon/></a>
    <a href="#"><MailIcon/></a>
    <a href="#"><LinkedinIcon/></a>
    <a href="#"><InstaIcon/></a>
    <a href="#"><FacebookIcon/></a>
    
    </div>
)
export default Icon