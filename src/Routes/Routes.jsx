import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../Components/Landing/LandingPage'

const Routes = () => {
    return (
        <div>
            <Route path="/">
                <LandingPage/>
            </Route>
        </div>
    )
}

export default Routes
