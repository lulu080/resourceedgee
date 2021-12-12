import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import MobileMenu from '../MobileMenu/MobileMenu'
import './Header.css'

const Header = () => {
    const history = useHistory()
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const signIn = () => {
        history.push('/auth')
    }

    const mobileSignIn = () => {
        signIn()
        setShowMobileMenu(false)
    }

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <h2>resource edge</h2>
                    <p>Features</p>
                    <p>About</p>
                </div>

                <div className="header__right">
                    <Button className="header__rightButton1">Sign up</Button>
                    <Button className="header__rightButton2" onClick={signIn}>Sign in</Button>
                </div>
                <Logo className="header__logo" /> 
                <div className="header__menu" onClick={() => setShowMobileMenu(prevState => !prevState)}>
                    <div className="header__menuLine1" />
                    <div className="header__menuLine2" />
                    <div className="header__menuLine3" />
                </div>
            </div>
            <MobileMenu className={ showMobileMenu ? 'header__showMobileMenu' : 'header__hideMobileMenu' } signIn={mobileSignIn} />
        </div>
    )
}

export default Header
