import React, { Component } from "react"
import { connect } from "react-redux"

import { useSelector } from "react-redux"
import { Regreq } from "../../Redux/user/actions"
import {useDispatch} from "react-redux"
import { Register1 } from "./Register1"
import { Register2 } from "./Register2"
import { Register3 } from "./Register3"
import { Register4 } from "./Register4"
import { Register4A } from "./Register4A"
import { Register5 } from "./Register5"
import { Register6 } from "./Register6"
import { Register7 } from "./Register7"
import { Register8 } from "./Register8"
import {RegProgress} from "./RegProgress"
import RegNav from "./RegNav"
import RegFooter from "./RegFooter"
import { Route, Redirect } from "react-router-dom"


const Register =()=>{
   const [stage,setStage]=React.useState(1)
   const [data,setData]=React.useState({"dob":"02/02/1992","jobs_applied":[]})
   const [step,setStep]=React.useState(0)
   const dispatch = useDispatch()
   const isAuth = useSelector((state) => state.auth.isAuth)

   
    const handleNext=()=>{
        setStage(stage+1)
    }
    const handleBack=()=>{
        setStage(stage-1)
    }
    const handleSubmit=(input)=>{
        console.log(data,input)
        setData({...data,...input})
        if(input.experienced){
            setStage(stage+0.1)
        }
        else if(input.company){
            setStage(5)
        }
        else setStage(stage+1) 
        
        if(stage==1)setStep(0)
        else if (stage==2)setStep(1)
        else if (stage==3)setStep(2)
        else if (stage==5)setStep(3)
        else if (stage==6)setStep(4)
        else if (stage==7)setStep(5)
    }

    const handleSubmitfinal=()=>{
        console.log(data)
        dispatch(Regreq(data))   
    }

    
        return (
            <div >
                {isAuth ?  <Redirect to="/dashboard" />:""}
                <RegNav></RegNav><br/>
                <button onClick={handleNext}>NEXT</button>
                <RegProgress
                stage={step}                
                />
                <div>{stage}</div>
                {
                    stage==1 && 
                    <Register1
                    handleSubmit={handleSubmit}
                    />
                }
                {
                    stage==2 && 
                    <Register2
                    name={data.name}
                    handleSubmit={handleSubmit}
                    />
                }
                {
                    stage==3 && 
                    <Register3
                    handleSubmit={handleSubmit}
                    handleback={handleBack}
                    />
                }
                {
                    stage==4 && 
                    <Register4
                    handleSubmit={handleSubmit}
                    handleback={handleBack}
                    />
                }
                {
                    stage==4.1 && 
                    <Register4A
                    handleSubmit={handleSubmit}
                    handleback={handleBack}
                    />
                }
                {
                    stage==5 && 
                    <Register5
                    handleSubmit={handleSubmit}
                    />
                }
                {
                    stage==6 && 
                    <Register6
                    name={data.education}
                    handleSubmit={handleSubmit}
                    />
                }
                {
                    stage==7 && 
                    <Register7
                    handleSubmit={handleSubmit}
                    />
                }
                {
                    stage==8 && 
                    <Register8
                    handleSubmit={handleSubmitfinal}
                    />
                }

                <RegFooter></RegFooter>

            </div>
        )
    }


const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        status:state.status,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Regreq: (payload) => dispatch(Regreq(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)