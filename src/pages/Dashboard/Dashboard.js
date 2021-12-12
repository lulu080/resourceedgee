import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router'
import Todo from '../../components/Todo/Todo'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <Fragment>
            <DashboardNav />
            <div className="dashboard">
                <div className="dashboard__container">
                    <h1>Hello, Ositadinma Nwagwu</h1>
                    <p>Welcome and good to have you back.</p>
                    <h2>Things to do</h2>
                    <Todo text="Upload your employee performance agreement" buttonText="Begin" blue />
                    <Todo text="Start quaterly self review" buttonText="Resume" />
                </div>
            </div>
        </Fragment>
    )
}

const DashboardNav = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="dashboardNav">
            <div className="dashboardNav__left">
                <div className="dashboardNav__menu" onClick={() => setShowDropdown(prevState => !prevState)}>
                    { Array(3).fill().map((_, i) => <div key={i} className="dashboardNav__line" /> ) }
                </div>
                <span 
                    style={{ 
                    color: 'blue', 
                    fontSize: '20px',
                    paddingRight: '20px',
                    fontWeight: 'bold',
                    marginLeft: '20px',
                    borderRight: '1px solid gray',
                    marginRight: '20px',
                }}
                >resource edge</span>
                <span>TM Dashboard</span>
            </div>

            <div className="dashboardNav__right">
                <img src="/images/avatar.png" alt="" />
            </div>
            { showDropdown && <Dropdown /> }
        </div>
    )
}

const Dropdown = () => {
    const history = useHistory()

    const logout = () => {
        history.push('/')
    }

    return (
        <div className="dropdown">
            <p>OSITADINMA NWAGWU</p>
            <p style={{ color: '#172B4D', marginBottom: '20px'}}>Profile</p>
            <p style={{ marginBottom: '20px', fontSize: '12px' }}>Use Resource Edge as</p>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px', marginBottom: '10px'}}>
                <div 
                    style={{ marginRight: '8px', height: '30px', width: '30px', borderRadius: '10px', backgroundColor: 'purple'}} />
                <span style={{color: 'gray', fontSize: '13px'}}>Talent Manager</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                <div 
                    style={{ marginRight: '8px', height: '30px', width: '30px', borderRadius: '10px', backgroundColor: 'purple'}} />
                <span style={{color: 'gray', fontSize: '13px'}}>Employee</span>
            </div>
            <p onClick={logout} style={{paddingTop: '20px', borderTop: '1px solid gray', color: '#172B4D', cursor: 'pointer'}}>Logout</p>
        </div>
    )
}


export default Dashboard
