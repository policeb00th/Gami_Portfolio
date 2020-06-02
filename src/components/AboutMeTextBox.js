import React from 'react';
import ReactDOM from 'react-dom';

class AboutMeText extends React.Component {
    constructor(props) {
        super(props)
        this.handleHovering=this.handleHovering.bind(this)
        this.handleHoverOut=this.handleHoverOut.bind(this)
        this.state = {
            Hover: false
        }

    }
    handleHovering() {
        console.log('hovering')
        this.setState(() => {
            return {
                Hover: true
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
            <div className="singleaboutme">
                <div data-pink={this.props.pink_text} data-hover={this.props.hover_text} onMouseEnter={this.handleHovering} onMouseOut={this.handleHoverOut} className="pinktext">{this.props.pink_text}</div>
            </div>
        )
    }
}
export default AboutMeText