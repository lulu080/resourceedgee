import React from 'react'
import Button from '../Button/Button'
import './MobileMenu.css'

const MobileMenu = ({ children, className, signIn }) => {

    return (
        <div className={`mobileMenu ${className}`}>
            <div className="mobileMenu__container">
                <div>Features</div>
                <div>About</div>
                <Button onClick={signIn}>Log in</Button>
                <Button className="mobileMenu__signup">Sign up</Button>
            </div>
        </div>
    )
}

export default MobileMenu
