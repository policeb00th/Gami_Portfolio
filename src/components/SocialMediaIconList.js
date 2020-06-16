import React from 'react';
import ReactDOM from 'react-dom';
import FacebookIcon from '../../assets/facebook.svg'
import MailIcon from '../../assets/mail.svg'
import BehanceIcon from '../../assets/behance-logo.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstaIcon from '../../assets/instagram.svg'
import * as clipboard from 'clipboard-polyfill'


class IconListStatefull extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="Icon_display">
                <p
                    data-anti="ANTI"
                    data-social="SOCIAL"
                    className="social"
                >
                    SOCIAL
                </p>
                <a
                    href="http://www.behance.net/sgami444"
                    target="_blank"
                >
                    <svg className="svg-behance">
                        <circle className="behance-circle" />
                    </svg>
                    <BehanceIcon className="Icon" />
                </a>
                <button
                    className="icon_button"
                    onClick={() => {
                        clipboard.writeText('sgami444@gmail.com')
                        alert('Email copied to clickboard')
                    }}
                >
                    <svg className="svg-mail">
                        <circle className="mail-circle" />
                    </svg>
                    <MailIcon className="Icon" />
                </button>
                <a
                    href="https://www.linkedin.com/in/sgami444/"
                    target="_blank"
                >
                    <svg className="svg-linkedin">
                        <circle className="linkedin-circle" />
                    </svg>
                    <LinkedinIcon className="Icon" />
                </a>
                <a
                    href="https://www.instagram.com/des_ui_gner/"
                    target="_blank"
                >
                     <svg className="svg-insta">
                        <circle className="insta-circle" />
                    </svg>
                    <InstaIcon className="Icon" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009078723667"
                    target="_blank"
                >
                    <svg className="svg-fb">
                        <circle className="fb-circle" />
                    </svg>
                    <FacebookIcon className="Icon" />
                </a>
            </div>
        )
    }

}
export default IconListStatefull