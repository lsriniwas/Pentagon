import React, { Component } from "react"
import { connect } from "react-redux"
import { Regreq } from "../../Redux/user/actions"
import { useSelector } from "react-redux"
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import { Route, Redirect } from "react-router-dom"

const Login1 = props => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const isAuth = useSelector((state) => state.auth.isAuth)

    const InputBtn = styled.input`
    border-radius : 25px;
    width : 300px;
    border : 1px solid #ddd;
    padding : 10px;
    margin-bottom : 5px;
    opacity : 0.95;
    &:hover{
        cursor : pointer;
        opacity : 1;
    }
    &:focus{
        outline : none;
    }
`;


 

    return (

        <div style={{margin:"auto",  backgroundImage:`url('back1.jpg')`,textAlign: "center",alignItems: "center",width:"100%",height:"100%"}} >
            <TextField
                type="text"
                value={email}
                label="Email"
                variant="outlined"
                
                onChange={e => setEmail(e.target.value)}
                required />
            <div>{props.error == 101 ? "User does not Exist" : ""}</div>
            <TextField
                type="password"
                value={password}
                label="Password"
                variant="outlined"                
                onChange={(e) => setPassword(e.target.value)}
                required />
            <br />
            <div>Forgotten your password?</div>
            <InputBtn onClick={()=>props.handleSubmit(email,password)} style={{ backgroundColor: "red", fontWeight: "600", color: "white", marginTop: "20px" }} type="submit" value="Log In" /><br />
            <div>{props.error == 202 ? "Incorrect Password" : ""}</div>
            <div>Or</div>
            <InputBtn style={{ backgroundColor: "blue", fontWeight: "600", color: "white" }} type="submit" value="Continue with Facebook" /><br />
            <InputBtn style={{ backgroundColor: "grey", fontWeight: "600", color: "white", marginBottom: "30px" }} type="submit" value="Continue with Google" /><br />
            {isAuth ?  <Redirect to="/dashboard" />:""}
        </div>
    )
}

export { Login1 }