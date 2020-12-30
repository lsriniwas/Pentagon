import React from "react"
import { Route, Switch } from "react-router-dom"
import { Navbar } from "./Navbar"
import Login from "../components/login2"
import PrivateRoute from "./PrivateRoute"
import Register from "../components/Register/Register"


const Routes = () => {
    return (

        
            <div>
                <Route path="/" render={() => <Navbar />} />
                <Switch>
                   <Route path="/login" render={() => <Login />} />
                    <Route path="/register" render={() => <Register />} />
                    <Route render={() => <h3>Error 404 Page not Found</h3>} />
                </Switch>
            </div>
    )
}

export { Routes }