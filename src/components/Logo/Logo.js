import React from 'react'
import './Logo.css'

const Logo = ({ className }) => {

    return (
        <div className={`logo ${className}`}>
            {/* logo */}
            <img className="logo__letter logo__letter1" src="/images/letterR.png" alt="" />
            <img className="logo__letter logo__letter2" src="/images/letterE.png" alt="" />
        </div>
    )
}

export default Logo
