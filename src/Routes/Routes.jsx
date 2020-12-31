import React from "react"
import { Route, Switch } from "react-router-dom"
import { Navbar } from "./Navbar"
import Login from "../components/Login/login2"
import PrivateRoute from "./PrivateRoute"
import Register from "../components/Register/Register"
import LandingPage from '../components/Landing/LandingPage';
import Dashboard from "../components/Dashboard/Dashboard"


const Routes = () => {
    return (

        
            <div>
                
                <Switch>
                    <Route path="/" exact render={() => <LandingPage/>} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/register" exact render={() => <Register />} />
                    <Route path="/dashboard" exact render={() => <Dashboard/> } />
                    <Route render={() => <h3>Error 404 Page not Found</h3>} />
                </Switch>
            </div>
    )
}

export { Routes }