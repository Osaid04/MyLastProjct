import React from "react";
import './ContactInformation.css';
import addressIcon from '../../../assets/png-photos/gps.png';
import phoneIcon from '../../../assets/png-photos/phone.png';
import emailIcon from '../../../assets/png-photos/email.png';

const ContactInformation = ({ address, phone, email }) => {
    return (
        <div className="Info">
            <img src={addressIcon} alt="Address" className="photo-1" />
            <div className="flex-1">
                <p className="header-p">Address</p>
                <p className="info-p">{address}</p>
            </div>
            <img src={phoneIcon} alt="Phone" className="photo" />
            <div className="flex-2">
                <p className="header-p">Phone</p>
                <p className="info-p">{phone}</p>
            </div>
            <img src={emailIcon} alt="Email" className="photo" />
            <div className="flex-3">
                <p className="header-p">Email</p>
                <p className="info-p">{email}</p>
            </div>
        </div>
    );
}

export default ContactInformation;
