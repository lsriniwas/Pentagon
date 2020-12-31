
import LandingPage from '../Components/Landing/LandingPage'
import { Route, Switch } from "react-router-dom"
import { Recruiter } from "../Components/Recruiter/Recruiter"
import { RecruiterProfile } from "../Private/Recruiter_Profile/RecruiterProfile"
import { PrivateRoute } from "./PrivateRoute"

const Routes=()=>{
    return(
        <div>
            <Switch>
                <Route path="/" exact>
                    <LandingPage />
                </Route>
                <Route path="/recruiter" exact>
                    <Recruiter/>
                </Route>
                <PrivateRoute path="/recruiter-profile">
                    <RecruiterProfile />
                </PrivateRoute>
            </Switch>
        </div>
    )
}

export {Routes}
