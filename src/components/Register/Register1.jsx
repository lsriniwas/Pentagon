import React, { Component } from "react"
import { connect } from "react-redux"
import { Regreq } from "../../redux/actions"
import { useSelector } from "react-redux"
import TextField from '@material-ui/core/TextField';


const Register1 =props=>{

    const[name,setName]=React.useState("")
    const[email,setEmail]=React.useState("")
    const[mobile,setMobile]=React.useState("")
    const[password,SetPassword]=React.useState("")

    const handleNext=()=>{
        const payload={
            name:name,
            email:email,
            mobile:mobile,
            password:password
        }
        console.log(payload)
        props.handleSubmit(payload)
    }

        return (
            <div style={{height:"500px", width:"782px", backgroundImage:`url('back1.jpg')`, marginLeft:"100px"}}>
                 <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>{setName(e.target.value)}} /><br/>
                 <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                 <TextField id="outlined-basic" label="Mobile Number" variant="outlined" onChange={(e)=>{setMobile(e.target.value)}} /><br/>
                 <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>{SetPassword(e.target.value)}} /><br/>
                 <button onClick={handleNext}>Next</button>
            </div>
        )
    }

export { Register1 }