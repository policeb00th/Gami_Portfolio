import React from 'react';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            email: '',
            message: '',
            sent: false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlemessageChange = this.handlemessageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            Name: '',
            email: '',
            message: '',
            sent: true
        })
        const templateId = 'testing'
        this.sendFeedback(templateId, {
            name: this.state.Name,
            message: this.state.message,
            email: this.state.email
        }
        )
    }
    sendFeedback = (templateId, variables) => {
        emailjs.send(
            'gmail', templateId,
            variables, "user_MKwgqmmevf5SnlaQxTSsG"
        ).then(res => {
            // Email successfully sent alert
            this.setState({
                Name: '',
                email: '',
                message: '',
                sent: false
            })
        })
            // Email Failed to send Error alert
            .catch(err => {
                this.setState({
                    Name: '',
                    email: '',
                    message: '',
                    sent: false
                })
            })
    }
    handleNameChange(event) {
        this.setState({ Name: event.target.value })
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    handlemessageChange(event) {
        this.setState({ message: event.target.value })
    }
    render() {
        return (
            <div className="formContainer">
                <form autoComplete="off" className="form_contact" onSubmit={this.handleSubmit} >
                    <div className="toptwoinputs">
                        <input
                            autoComplete="off"
                            className="smallinput"
                            onFocus={(e) => e.target.placeholder = ""}
                            onMouseEnter={(e) => e.target.placeholder = ""}
                            onMouseLeave={(e) => e.target.placeholder = "Name"}
                            type="text" value={this.state.Name}
                            onChange={this.handleNameChange}
                            id="Name"
                            placeholder="Name"
                        />
                        <input
                            className="smallinput"
                            onFocus={(e) => e.target.placeholder = ""}
                            onMouseEnter={(e) => e.target.placeholder = ""}
                            onMouseLeave={(e) => e.target.placeholder = "Email"}
                            type="email" value={this.state.email}
                            onChange={this.handleEmailChange}
                            id="email" placeholder="Email"
                        />
                    </div>
                    <div>
                        <textarea
                            className="biginput"
                            onFocus={(e) => e.target.placeholder = ""}
                            onMouseEnter={(e) => e.target.placeholder = ""}
                            onMouseLeave={(e) => e.target.placeholder = "Message"}
                            type="text" value={this.state.message}
                            onChange={this.handlemessageChange}
                            id="message"
                            placeholder="Message"
                        />
                    </div>
                    <div className="button_container">
                        {/* <button className={this.state.sent?"submit_button":"sent_button"}>Send</button> */}
                        {this.state.sent?<button className="sent_button"><span className="sent">Sent!</span></button>:<button className="submit_button">Send</button>}
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm