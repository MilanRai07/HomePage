import React from "react";
import {ReactComponent as Emoji} from "../assets/emoji.svg";
import '../scss/ContactForm.scss';
const Message=()=>{
   return(
    <>
    <div className="message">
    <p>Thank you for your message</p>
       <Emoji/>
    </div>
    </>
   )
}
export default Message;