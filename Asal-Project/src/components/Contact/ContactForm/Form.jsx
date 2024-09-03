import React, { useState } from "react";
import './Form.css';
import CallToActionButton from '../ContactButton/CallToActionButton'; //import button 
const Form = () => {
  /*to create form with fullname and email and message that is no value initial*/ 
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    /* to update the form whne the user enter values in full name and email and message */ 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    /* return true if all filds is filling*/ 
    const isFormFilled = () => {
        return formData.fullName && formData.email && formData.message;
    };

    return (
        <div className="form-container">
            <form className="contact-form" action="">
                <h2>Send Message</h2>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Type your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                {/*if the fileds is not filed the class disabled invoked if filled the class enabled invoked*/ }
                <CallToActionButton
                    text="Send"
                    className={isFormFilled() ? "enabled-button" : "disabled-button"}
                    
                />
            </form>
        </div>
    );
}

export default Form;
