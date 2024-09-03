import React from "react";
import './Contact.css'
import ContactInformation from './ContactInformation/ContactInformation'
import Form from './ContactForm/Form'
import SocialMediaLinks from './../SocialMediaLinks/SocialMediaLinks'; //import Social mediaLinks to put it in main
const Contact = () =>{
    return(
        <div>
            <h1> Contact Us </h1>
            <p id="contact-p">Feel free to reach out for projects, ideas, or collaboration. Contact me via the form below or at [your email address]. I look forward to connecting!</p>
            <div className="Myinformation">
            <ContactInformation 
            address="Abu Falah Village, Ramallah and Al-Bireh Governorate, West Bank, Palestine"
            phone="0593778989"
            email="osaidhamayel04@gmail.com"
        />
            

            </div>
            <div>
        <Form/>

            </div>
            <h1 id="second-h1">Visit my pages</h1>
             <div id="Social">  <SocialMediaLinks/> </div>   
          
        </div>










    )
}
export default Contact;