import React, { useState } from 'react';
import '../styles/Form-Subbmition.sass';
import emailjs from 'emailjs-com';

const FormSubmissionComponent = () => {
 

    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        subject: '',
        message: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!formData.firstName || !formData.secondName || !formData.email || !formData.subject || !formData.message) {
            alert('Skriv in alla fält.');
            return;
        }

        // Validate Email Format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(formData.email)) {
            alert('Ange en giltig e-postadress.');
            return;
        }

        // Send email
        emailjs.send('service_fr52fjv', 'template_b88450x', formData, 'S5XjuZb-fDLtvEybr')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Meddelandet har skickats');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Kunde inte skicka meddelandet. Försök igen.');
            });

        // Reset form after successful submission
        setFormData({
            firstName: '',
            secondName: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
    <div id="form-submission-wrapper">
        <div id='header'>
            <h1>Behöver du hjälp? Kontakta mig</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">Förnamn:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="secondName">Efternamn:</label>
                <input
                    type="text"
                    id="secondName"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="subject">Ämne:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="message">Meddelande:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Skicka</button>
        </form>
    </div>
    );    
};

export default FormSubmissionComponent;
