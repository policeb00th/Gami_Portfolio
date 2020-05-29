import React from 'react';
import ReactDOM from 'react-dom';
import FacebookIcon from '../../assets/facebook.svg'
import MailIcon from '../../assets/mail.svg'
import BehanceIcon from '../../assets/behance-logo.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstaIcon from '../../assets/instagram.svg'
const IconList = () => (
    <div className="Icon_display">
        <p>SOCIAL</p>
        <a href="#"><BehanceIcon className="Icon" /></a>
        <a href="#"><MailIcon className="Icon" /></a>
        <a href="#"><LinkedinIcon className="Icon" /></a>
        <a href="#"><InstaIcon className="Icon" /></a>
        <a href="#"><FacebookIcon className="Icon" /></a>
    </div>
)
class IconListStatefull extends React.Component {
    constructor(props){
        super(props)
        this.handleHovering=this.handleHovering.bind(this)
        this.handleHoverOut=this.handleHoverOut.bind(this)
        this.state={
            Hover:false
        }
    }
    handleHovering(){
        console.log('hovering')
        this.setState(()=>{
            return{
                Hover:true
            }
        })
    }
    handleHoverOut(){
        console.log('hovered out')
        this.setState(()=>{
            return{
                Hover:false
            }
        })
    }
    render() {
        return (
            <div className="Icon_display">
               {this.state.Hover? <p className="social" onMouseEnter={this.handleHovering} onMouseLeave={this.handleHoverOut}><span className="anti">ANTI</span>SOCIAL</p>: <p className="social" onMouseEnter={this.handleHovering} onMouseLeave={this.handleHoverOut}>SOCIAL</p>}
                <a href="http://www.behance.net/sgami444" target="_blank"><BehanceIcon className="Icon" /></a>
                <a href="#"><MailIcon className="Icon" /></a>
                <a href="https://www.linkedin.com/in/sgami444/"><LinkedinIcon className="Icon" /></a>
                <a href="https://www.instagram.com/des_ui_gner/"><InstaIcon className="Icon" /></a>
                <a href="https://www.facebook.com/profile.php?id=100009078723667"><FacebookIcon className="Icon" /></a>
            </div>
        )
    }
}
export default IconListStatefull