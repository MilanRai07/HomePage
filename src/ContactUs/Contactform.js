import React, { useState } from "react";
import '../scss/ContactForm.scss';
import Message from "./Message";
const ContactForm = () => {
    const initialValues = { "fname": '', "lname": '', "email": '', "text": '' };
    const [formValue, setFormValue] = useState(initialValues);
    const [error, setError] = useState({});
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value });;
    }
    const Submit = (event) => {
        event.preventDefault();
        setError(Validate(formValue));   //validate function calling  
        setShow(true);
    }
    const Back = () => {
        setShow(false);
        setFormValue({ "fname": '', "lname": '', "email": '', "text": '' });
    }
    const Validate = (value) => {                   //This function validate the form
        const errors = {};
        // eslint-disable-next-line
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.fname) {
            errors.fname = "Your name is required";
        }
        if (!value.lname) {
            errors.lname = "your name is required ";
        }
        if (!value.email) {
            errors.email = "your email is required";
        }
        if (!regex.test(value.email)) {
            errors.email = "invalid Email ID"
        }
        if (!value.text) {
            errors.text = "Please add your message";
        }
        return errors;
    }
    const check = Object.keys(error).length === 0;
    return (
        <>
            <form onSubmit={Submit}>

                <div className="form">
                    {check && show ? <>
                        <Message />
                    </>
                        : <>
                            <div className="form-head">
                                <div>
                                    <p>First name</p>
                                    <input type="text"
                                        name="fname"
                                        value={formValue.fname}
                                        onChange={handleChange}
                                    ></input>
                                    <p className="error">{error.fname}</p>
                                </div>
                                <div>
                                    <p>Last name</p>
                                    <input type="text"
                                        name="lname"
                                        value={formValue.lname}
                                        onChange={handleChange}
                                    ></input>
                                    <p className="error">{error.lname}</p>
                                </div>
                            </div>
                            <div>
                                <p>Email</p>
                                <input type="text"
                                    name="email"
                                    value={formValue.email}
                                    onChange={handleChange}
                                ></input>
                                <p className="error">{error.email}</p>
                            </div>
                            <div>
                                <p>Message</p>
                                <textarea
                                    name="text"
                                    value={formValue.text}
                                    onChange={handleChange}
                                ></textarea>
                                <p className="error">{error.text}</p>
                            </div>
                        </>}

                </div>
                <div className="submit-button">
                    {
                        check && show ?
                            <><button onClick={Back}>
                                <p>
                                    Go Back
                                </p>
                            </button>
                            </> :
                            <>
                                <button type="submit">
                                    <p>
                                        Submit
                                    </p>
                                </button>
                            </>
                    }
                </div>
            </form>
        </>
    )
}
export default ContactForm;