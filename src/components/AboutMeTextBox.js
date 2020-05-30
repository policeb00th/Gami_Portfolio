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
                {this.state.Hover?<p onMouseEnter={this.handleHovering} onMouseOut={this.handleHoverOut} className="hovertext">{this.props.hover_text}</p>:<p onMouseEnter={this.handleHovering} onMouseOut={this.handleHoverOut}  className="pinktext">{this.props.pink_text}</p>}
            </div>
        )
    }
}
export default AboutMeText