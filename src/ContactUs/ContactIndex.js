import React from "react";
import ContactHeader from "./ContactHeader";
import '../scss/ContactIndex.scss';
import ContactForm from "./Contactform";
const ContactIndex = () => {
    return (
        <>
            <div className="contact-section">
                    <div className="header">
                        <ContactHeader />
                    </div>            
                   <div className="contact-form">
                         <ContactForm/>
                    </div>
            </div>
        </>
    )
}
export default ContactIndex;