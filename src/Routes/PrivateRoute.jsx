import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"


export const PrivateRoute = ({children}) => {
    const recruiterIsAuth=useSelector(state=>state.recruiter.recruiterIsAuth)
    return recruiterIsAuth? (
                        <div>
                           {children}
                        </div>
                    ) : (
                            <Redirect to="/recruiter" />

                    )           
}