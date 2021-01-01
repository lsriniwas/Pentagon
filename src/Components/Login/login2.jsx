import React, { Component } from "react"
import { connect } from "react-redux"
import { Loginreq } from "../../Redux/user/actions"
import { Route, Redirect } from "react-router-dom"
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux"


const Login2 = props => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const dispatch = useDispatch()   
    const isAuth = useSelector((state) => state.auth.isAuth)

    const handleSubmit = () => {
        
        dispatch(Loginreq(email,password))

    }

  
        return (
            <div>
                <form onSubmit={()=>handleSubmit}>
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)} />
                    <br />
                    <input
                        type="text"
                        value={password}
                        name="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)} />
                        <br/>
                    <input type="submit" value="submit" />
                </form>
                { isAuth ? "LOGGED IN" : "LOGGED OUT"}
        {isAuth ?  <Redirect to="/dashboard" />:""}
            </div>
        )
    }





    export { Login2 }