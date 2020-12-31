import React from 'react'
import LandingPageContent from './LandingPageContent'
import Navbar from './Navbar'

const LandingPage = () => {
    return (
        <div>
            <Navbar/> {/* Provide route to Recruiter page inside Post a Job button on Navbar  */}
            <LandingPageContent/>
        </div>
    )
}

export default LandingPage
