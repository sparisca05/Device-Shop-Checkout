import React from 'react';

import FormInput from './FormInput';

function ContactForm() {
    return (
        <div className='contact-form'>
            <FormInput label='First & Last name' inputType='text' id='name' name='name' />
            <FormInput label='Email Address' inputType='email' id='email' name='email' />
            <div style={{display: 'flex', columnGap: '30px'}}>
                <FormInput label='Country' inputType='textarea' id='message' name='message' />
                <FormInput label='Postal Code' inputType='textarea' id='message' name='message' />
            </div>
            <button>Continue</button>
        </div>
    );
}

export default ContactForm;