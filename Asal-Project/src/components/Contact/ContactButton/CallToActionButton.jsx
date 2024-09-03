import React from 'react';
import './CallToActionButton.css'; // Assuming you have corresponding CSS
/* parent btton*/ 
const CallToActionButton = ({ text ,className,onClick}) => {
    return (
        <button
            className={className}
            onClick={onClick}
          
        >
            {text}
        </button>
    );
};

export default CallToActionButton;
