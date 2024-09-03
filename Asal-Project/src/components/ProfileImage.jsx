import React from 'react';
import profilePic from '../assets/jpg-photos/me.jpg'; // Replace with the actual path to your image

const ProfileImage = () => {
    return (
        <div className="profile-image">
            <img src={profilePic} alt="Profile" />
        </div>
    );
};

export default ProfileImage;
