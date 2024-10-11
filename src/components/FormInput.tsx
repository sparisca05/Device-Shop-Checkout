
interface PaySectionProps {
    label: string;
    inputType: string;
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const FormInput = ({label, inputType, name, placeholder, onChange} : PaySectionProps) => {
    return (
        <div className='form-input'>
            <label className='subtitle' htmlFor={name} >{label}</label>
            {inputType !== 'select' ? 
                <input type={inputType} id={name} name={name} autoComplete={inputType} placeholder={placeholder} onChange={onChange} /> 
            : (
                <select aria-label="Select your country" id={name} name={name} autoComplete='off' onChange={onChange}>
                    <option defaultValue="Finland">Finland</option>
                    <option value="Colombia">Colombia</option>
                    <option value="United States">United States</option>
                    <option value="France">France</option>
                </select>
            )}
        </div>
    );
}

export default FormInput;