import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"


export const PrivateRoute = ({ isAuth,Component, ...rest }) => {
    
       
                    return isAuth ? (
                        <Route{...rest} render={(props) => <Component {...props} />} />
                    ) : (
                            <Redirect to="/login" />
                        )
               
    
}

const mapStateToProps = (state) => {

    return {
       isAuth: state.isAuth
    }
}



export default connect(mapStateToProps)(PrivateRoute)