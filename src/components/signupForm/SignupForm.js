import React from 'react';
import useForm from 'hooks/formHook';

const SignupForm = () => {
    const firstName = useForm('text');
    const lastName = useForm('text');
    const email = useForm('email');

    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <form>
                    <label for="first name">First Name</label>
                    <input { ...useForm.form } />

                    <label for="last name">First Name</label>
                    <input { ...useForm.form } />

                    <label for="first name">First Name</label>
                    <input { ...useForm.form } />

                </form>
            </div>
        </div>
    )
}
