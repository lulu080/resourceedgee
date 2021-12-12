import React from 'react'
import TopSection from '../components/TopSection/TopSection'
import HumanResources from '../components/HumanResources/HumanResources'
import AdminLogistics from '../components/AdminLogistics/AdminLogistics'
function LandingPage() {
    return (
        <div>
            <TopSection />
            <HumanResources/>
            <AdminLogistics/>
        </div>
    )
}

export default LandingPage
