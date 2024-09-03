import React from 'react';
import './SocialMediaLinks.css'; 
//import the images
import facebookimage from '../../assets/png-photos/face.png'; 
import linkedImage from '../../assets/png-photos/ln.png'; 
import inistgramImage from '../../assets/png-photos/insta.png'; 
import gmailImage from '../../assets/png-photos/gmail.png'; 
import githubImage from '../../assets/png-photos/social.png'; 
//social component for links
const SocialMediaLinks = () => {
    return (
        <div className="social-media">
            <a href="https://www.facebook.com/osaid.ghassan?locale=ar_AR"><img src={facebookimage} alt="Facebook" /></a>
            <a href="https://www.linkedin.com/in/osaid-hamayel-557a24223/"><img src={linkedImage} alt="LinkedIn" /></a>
            <a href="https://www.instagram.com/osaid_7amayel/"><img src={inistgramImage} alt="Instagram" /></a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><img src={gmailImage} alt="gmail" /></a>
            <a href="https://github.com/Osaid04"><img src={githubImage} alt="github" /></a>
        </div>
    );
};

export default SocialMediaLinks;
