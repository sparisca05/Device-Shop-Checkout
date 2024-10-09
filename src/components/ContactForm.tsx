import React, { useState } from 'react';

import FormInput from './FormInput';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        postalCode: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const collectUserInfo = (e: React.FormEvent<HTMLFormElement>) => {

        const { name, email, country, postalCode } = formData;

        if (!name || !email || !country || !postalCode) {
            e.preventDefault();
            alert('Please fill in all fields.');
            return;
        }

        const userInfo = { ...formData };
        console.log(userInfo);
        alert('User information collected successfully!');
    }

    return (
        <form onSubmit={collectUserInfo} className='contact-form'>
            <FormInput label='First & Last name' inputType='name' name='name' placeholder='Enter first & last name' onChange={handleChange}/>
            <FormInput label='Email Address' inputType='email'name='email' placeholder='Enter email address' onChange={handleChange}/>
            <div>
                <FormInput label='Country' inputType='select' name='country' placeholder='Select' onChange={handleChange}/>
                <FormInput label='Postal Code' inputType='number' name='postalCode' placeholder='00270' onChange={handleChange}/>
            </div>
            <button type='submit'>Continue</button>
        </form>
        );
}

export default ContactForm;