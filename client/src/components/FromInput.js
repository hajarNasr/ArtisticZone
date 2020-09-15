import React from 'react';

const FormInput = ({label, id, type, placeholder, className, error}) =>{
    return(
        <div className="form-input-wrapper">
             <label htmlFor={id}>
                 {label}
             </label>
             <input
                id = {id}
                type = {type}
                name = {id}
                placeholder = {placeholder}
                className = {className}
             />
             <div className="auth-err">{error}</div>
        </div>
    )
}

export default FormInput;