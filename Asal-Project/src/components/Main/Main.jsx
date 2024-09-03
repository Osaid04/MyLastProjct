import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate to another page
import ProfileImage from './../ProfileImage'; // Import ProfileImage component
import SocialMediaLinks from './../SocialMediaLinks/SocialMediaLinks'; // Import SocialMediaLinks component
import CallToActionButton from './../Contact/ContactButton/CallToActionButton'; // Import CallToActionButton component

import './Main.css'; 

const Main = () => {
    const navigate = useNavigate(); // Initialize useNavigate to go to contact page

    const handleClick = () => { // using navigate to go to the contact page
        navigate('/contact'); 
    };

    return (
        <section className="Main">
            <ProfileImage /> 
            <div className="Main-text">
                <h1>I AM A <span>Frontend Developer</span></h1>
                <p>As a web designer, I specialize in creating visually appealing and user-friendly websites that help businesses and individuals establish a strong online presence. My focus is on combining aesthetics with functionality, ensuring that each design is not only beautiful but also effective in engaging users and achieving the desired goals. From responsive layouts to intuitive navigation, I strive to deliver designs that are both innovative and practical, tailored to meet the unique needs of each client.</p>
                <SocialMediaLinks />
                <CallToActionButton
                    text="Contact Me"
                    className="cta-btn"
                    onClick={handleClick} // Pass handleClick to CallToActionButton
                />
            </div>
        </section>
    );
};

export default Main;
