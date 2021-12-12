import React from 'react'
import './Input.css'

function Input({ label, type, placeholder, error, value, handleChange, toggleShowPassword, visible }) {

    return (
        <div className="input">
            <label>{label}</label>
            <input  
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                // required
                style={{ 
                    border: error ? '1px solid red' : ''
                }}
            />
            <span className="input__errorMsg">{error}</span>
            {
                label.toLowerCase().includes('password') &&
                <img src={`/images/${visible ? 'watch-filled.png' : 'watch.png'}`} alt="" onClick={toggleShowPassword} />
            }
        </div>
    )
}

export default Input
