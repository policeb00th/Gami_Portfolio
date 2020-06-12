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
            message: ''
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
            variables, process.env.REACT_EMAIL_API
        ).then(res => {
            // Email successfully sent alert
            Swal.fire({
                title: 'Email Successfully Sent',
                icon: 'success'
            })
        })
            // Email Failed to send Error alert
            .catch(err => {
                Swal.fire({
                    title: 'Email Failed to Send',
                    icon: 'error'
                })
                console.error('Email Error:', err)
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
            <div>
                <form className="form_contact" onSubmit={this.handleSubmit} >
                    <input
                        onFocus={(e) => e.target.placeholder = ""}
                        onMouseEnter={(e) => e.target.placeholder = ""}
                        onMouseLeave={(e)=>e.target.placeholder="Name"}
                        type="text" value={this.state.Name}
                        nChange={this.handleNameChange}
                        id="Name"
                        placeholder="Name"
                    />
                    <input
                        onFocus={(e) => e.target.placeholder = ""}
                        onMouseEnter={(e) => e.target.placeholder = ""}
                        onMouseLeave={(e)=>e.target.placeholder="Email"}
                        type="email" value={this.state.email}
                        onChange={this.handleEmailChange}
                        id="email" placeholder="Email"
                    />
                    <input
                        onFocus={(e) => e.target.placeholder = ""}
                        onMouseEnter={(e) => e.target.placeholder = ""}
                        onMouseLeave={(e)=>e.target.placeholder="Message"}
                        type="textarea" value={this.state.message}
                        onChange={this.handlemessageChange}
                        id="message"
                        placeholder="message"
                    />
                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

export default ContactForm