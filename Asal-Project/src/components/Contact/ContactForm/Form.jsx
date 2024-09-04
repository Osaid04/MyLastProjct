import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import './Form.css';
import CallToActionButton from '../ContactButton/CallToActionButton';

const Form = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormFilled = () => {
        return formData.fullName && formData.email && formData.message;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormFilled()) {
            console.log('Form submitted:', formData);
            // Handle form submission
        }
    };

    return (
        <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>{t('form.title')}</h2>
                <input
                    type="text"
                    name="fullName"
                    placeholder={t('form.fullNamePlaceholder')}
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t('form.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder={t('form.messagePlaceholder')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <CallToActionButton
                    text={t('form.submitButton')}
                    className={isFormFilled() ? "enabled-button" : "disabled-button"}
                />
            </form>
        </div>
    );
};

export default Form;
