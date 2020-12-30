import React, { Component } from "react"
import { connect } from "react-redux"
import { Regreq } from "../../redux/actions"
import { useSelector } from "react-redux"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const Register2 =(props)=>{
    const[gender,setGender]=React.useState("")

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          margin:"auto",
          justifyContent:"center",
          '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
          },
        },
      }));
      const classes = useStyles();

      const handleNext=(sex)=>{
        const payload={
            sex:sex
        }
        console.log(payload)
        props.handleSubmit(payload)
    }

  return (
            <div  style={{height:"500px", width:"782px", backgroundImage:`url('back1.jpg')`, marginLeft:"100px"}}>
                <h1>Welcome {props.name}</h1>
                <h3>Thanks for registering with us. Complete your profile and find the right job in a few steps</h3>
                <h2>What is your identity?</h2>
                <div className={classes.root} >
                <Paper onClick={()=>handleNext("male")} variant="outlined" square ><img src='male.png' alt="male" /><br/>Male</Paper>
                <Paper onClick={()=>handleNext("female")} variant="outlined" square ><img src='female.png' alt="female" /><br/>Female</Paper>
                <Paper onClick={()=>handleNext("binary")} variant="outlined" square ><img src='binary.png' alt="binary" /><br/>Binary</Paper>
                <Paper onClick={()=>handleNext("n/a")} variant="outlined" square ><img src='none.png' alt="none" /><br/>Rather not Specify</Paper>
                </div>
            </div>
        )
    }


    export { Register2 }