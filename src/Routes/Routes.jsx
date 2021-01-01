
import LandingPage from '../Components/Landing/LandingPage'
import { Route, Switch } from "react-router-dom"
import { Recruiter } from "../Components/Recruiter/Recruiter"
import { RecruiterProfile } from "../Private/Recruiter_Profile/RecruiterProfile"
import { PrivateRoute } from "./PrivateRoute"
import  Dashboard  from "../Components/Dashboard/Dashboard"
import {Login2} from "../Components/Login/login2"
import Register from "../Components/Register/Register"
import JobListing from '../Components/JobListing/JobListing'
import { Profile } from '../Components/Profile/Profile'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact><LandingPage /></Route>
                <Route path="/login" render={() => <Login2 />} />
                <Route path="/register" exact render={() => <Register />} />
                <Route path="/recruiter" exact><Recruiter /></Route>
                <PrivateRoute path="/recruiter-profile"><RecruiterProfile /> </PrivateRoute>
                <PrivateRoute path="/dashboard"> <Dashboard /></PrivateRoute>
                <PrivateRoute path="/user-profile"> <Profile /></PrivateRoute>
                <Route path="/listings"><JobListing /></Route>

            </Switch>
        </div>
    )
}

export { Routes }
