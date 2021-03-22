import React from 'react';
import useForm from 'hooks/formHook';
import {
    ContactWrapper,
    ContactRow,

} from './ContactStyled';



const Contact = () => {
    const fullName = useForm('text');
    const email = useForm('email');


    return (
        <ContactWrapper>
            <ContactRow>
                <h1>Contact Us</h1>
                <div>
                    <form>
                        <label for="name"></label>
                        <input placeholder="Full Name" { ...fullName.form} />

                        <label for="name"></label>
                        <input placeholder="email" { ...email.form} />

                        <label for="phone"></label>
                        <input placeholder="Phone" { ...fullName.form} />

                        <label for="company name"></label>
                        <input placeholder="company name" { ...fullName.form} />

                        <label for="message"></label>
                        <input placeholder="Tell us your request" { ...fullName.form} />
                    </form>
                </div>

            </ContactRow>
        </ContactWrapper>
    )
}


export default Contact;
