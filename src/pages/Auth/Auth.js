import React, { useEffect, useReducer, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import './Auth.css'

function Auth() {
    const history = useHistory()
    const [authStep, setAuthStep] = useState('loginStep1')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value)
    }

    const handlePasswordVisibility = () => {
        setShowPassword(prevState => !prevState)
    }

    const handleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prevState => !prevState)
    }

    useEffect(() => {
        if (authStep === 'resetPasswordStep2') {
            setTimeout(() => setAuthStep('resetPasswordStep3'), 2000)
        }
    }, [authStep])



    const handleSubmit = e => {
        e.preventDefault()
        
        switch (authStep) {
            case 'loginStep1':
                if (email.includes('@') && email.includes('.com')) {
                    setAuthStep('loginStep2')
                } else {
                    setEmailError('Invalid email')
                }
                break
            case 'loginStep2':
                if (password.length < 6) {
                    setPasswordError('Your password should have at least 6 characters')
                } else {
                    history.push('/dashboard')
                }
                break
            case 'resetPasswordStep1':
                if (email.includes('@') && email.includes('.com')) {
                    setAuthStep('resetPasswordStep2')
                } else {
                    setEmailError('Invalid email')
                }
                break
            case 'resetPasswordStep3':
                if (password.trim().length === 0 && confirmPassword.trim().length === 0) {
                    setPasswordError('Enter password')
                    setConfirmPasswordError('Enter password')
                } else if (password.length < 6 && confirmPassword.length < 6) {
                    setPasswordError('Your password should have at least 6 characters')
                    setConfirmPasswordError('Your password should have at least 6 characters')
                } else if (password !== confirmPassword) {
                    setPasswordError('Your passwords must match')
                    setConfirmPasswordError('Your passwords must match')
                } else {
                    setPasswordError('')
                    setConfirmPasswordError('')
                    setAuthStep('resetPasswordStep4')
                }
        }
    }

    const handleToggleForgotPasswordText = () => {
        authStep === 'loginStep1' || authStep === 'loginStep2' 
        ? setAuthStep('resetPasswordStep1') 
        : setAuthStep('loginStep1')
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <h1>resource edge</h1>

                <div className="auth__box">
                    <h2>{authStep.includes('login') ? 'Log in' : 'Reset Password'}</h2>
                    <p>
                        {
                            authStep.includes('login') &&
                            'Access your resource edge account.'
                        }
                        {
                            authStep === 'resetPasswordStep1' &&
                            'To enable us reset your password, enter your email below'
                        }
                        {
                            authStep === 'resetPasswordStep3' &&
                            'The password should have at least 6 characters'
                        }
                    </p>

                    {
                        authStep === 'loginStep2' &&
                        <div className="auth__detailsContainer">
                            <div>Ositadinma Nwagu</div>
                            <span>{email}</span><br />
                        </div>
                    }

                    {
                        authStep === 'resetPasswordStep2' &&
                        <>
                            <img src="/images/success.png" alt="" className="auth__successImage" />
                            <p>A reset email has been sent to your email address.</p>
                        </>
                    }

                    {
                        authStep === 'resetPasswordStep4' &&
                        <>
                            <img src="/images/success.png" alt="" className="auth__successImage" />
                            <p>Your password has been reset successfully.</p>
                        </>
                    }

                    <form onSubmit={handleSubmit} className="auth__form">
                        {
                            (authStep === 'loginStep1' || authStep === 'resetPasswordStep1') && 
                            <Input 
                                label="Email Address" 
                                type="text" 
                                placeholder="Enter email" 
                                value={email} 
                                handleChange={handleEmailChange} 
                                error={emailError}
                            />
                        }
                        {
                            authStep === 'loginStep2' && 
                            <Input 
                                label="Password" 
                                type={!showPassword ? 'password' : 'text'} 
                                placeholder="Enter password" 
                                value={password} 
                                handleChange={handlePasswordChange} 
                                toggleShowPassword={handlePasswordVisibility} 
                                visible={showPassword}
                                error={passwordError}
                            />
                        }
                        { 
                            authStep === 'resetPasswordStep3' &&
                            <>
                                <Input 
                                    label="New Password" 
                                    type={!showPassword ? 'password' : 'text'} 
                                    placeholder="Enter password" 
                                    value={password} 
                                    handleChange={handlePasswordChange} 
                                    toggleShowPassword={handlePasswordVisibility} 
                                    visible={showPassword}
                                    error={passwordError}
                                />
                                <Input 
                                    label="Confirm Password" 
                                    type={!showConfirmPassword ? 'password' : 'text'} 
                                    placeholder="Confirm password" 
                                    value={confirmPassword} 
                                    handleChange={handleConfirmPasswordChange} 
                                    toggleShowPassword={handleConfirmPasswordVisibility} 
                                    visible={showConfirmPassword}
                                    error={confirmPasswordError}
                                />
                            </>
                        }
                        {
                            (authStep !== 'resetPasswordStep2' && authStep !== 'resetPasswordStep4') &&
                            <Button>Submit</Button>
                        }
                    </form>
                    <span 
                        className="auth__forgotPassword"
                        onClick={handleToggleForgotPasswordText}
                    >
                        {
                            authStep === 'loginStep1' || authStep === 'loginStep2' ? 'Forgot password?' : 'Back to Login'
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Auth
