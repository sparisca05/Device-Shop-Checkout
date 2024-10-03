import React from 'react';

const FormInput = ({label, inputType, id, name} : {label: string, inputType: string, id: string, name: string}) => {
    return (
        <div className='form-input'>
            <label className='subtitle'>{label}</label>
            <input type={inputType} id={id} name={name} />
        </div>
    );
}

export default FormInput;