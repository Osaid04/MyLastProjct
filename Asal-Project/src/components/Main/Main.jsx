import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation from react-i18next
import ProfileImage from './../ProfileImage';
import SocialMediaLinks from './../SocialMediaLinks/SocialMediaLinks';
import CallToActionButton from './../Contact/ContactButton/CallToActionButton';

import './Main.css'; 

const Main = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Initialize useTranslation hook

    const handleClick = () => {
        navigate('/contact'); 
    };

    return (
        <section className="Main">
            <ProfileImage />
            <div className="Main-text">
                <h1>{t('main.title')} <span>{t('main.jobTitle')}</span></h1>
                <p>{t('main.description')}</p>
                <SocialMediaLinks />
                <CallToActionButton
                    text={t('main.contactButton')} // Use translation for the button text
                    className="cta-btn"
                    onClick={handleClick}
                />
            </div>
        </section>
    );
};

export default Main;
