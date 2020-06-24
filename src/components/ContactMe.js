import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';

const ContactMe = () => (
    <div id="contactme">
        <h1 className="work_header">Contact me</h1>
        <h1 data-pink="Don't be a stranger" data-blue=", let's connect!" className="contact_line" > Don't be a stranger</h1>
        <ContactForm />
    </div>
)
export default ContactMe