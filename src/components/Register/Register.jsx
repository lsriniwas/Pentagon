import React, { Component } from "react"
import { connect } from "react-redux"
import { Regreq } from "../../redux/actions"
import { useSelector } from "react-redux"
import { Register1 } from "./Register1"
import { Register2 } from "./Register2"
import { Register3 } from "./Register3"
import { Register4 } from "./Register4"
import { Register4A } from "./Register4A"
import { Register5 } from "./Register5"
import { Register6 } from "./Register6"
import { Register7 } from "./Register7"
import { Register8 } from "./Register8"


const Register =()=>{
   const [stage,setStage]=React.useState(0)
   const [data,setData]=React.useState({})

   
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
    }

    const handleSubmitfinal=()=>{
        console.log(data)
        //redux call and thunk and api
        //directly trigger isAuth and land on homepage      
    }

    
        return (
            <div >
                <button onClick={handleNext}>NEXT</button>
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
                    handleSubmit={handleSubmit}
                    />
                }

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