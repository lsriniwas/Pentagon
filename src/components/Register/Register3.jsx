import React, { Component } from "react"
import { connect } from "react-redux"
import { Regreq } from "../../redux/actions"
import { useSelector } from "react-redux"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Register3 =props=>{
    const[city,setCity]=React.useState("")
    const[submitted,setSubmitted]=React.useState(false)

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          margin:"auto",
          justifyContent:"center",
          '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(25),
            height: theme.spacing(14),
          },
        },
      }));
      const classes = useStyles();

      const handleNext=(city)=>{
        const payload={
            city:city
        }
        console.log(payload)
        props.handleSubmit(payload)
        setSubmitted(true)
    }


  return (
            <div  style={{height:"500px", width:"782px", backgroundImage:`url('back1.jpg')`, margin:"auto",marginTop:"50px"}}>
                <h1>Which city do you live in?</h1>
                
                <div className={classes.root} >
                <Paper onClick={()=>handleNext("Delhi NCR")} variant="outlined" square ><img src='Delhi NCR.png' alt="Delhi NCR" /><br/>Delhi NCR</Paper>
                <Paper onClick={()=>handleNext("Mumbai")} variant="outlined" square ><img src='Mumbai.png' alt="Mumbai" /><br/>Mumbai</Paper>
                <Paper onClick={()=>handleNext("Pune")} variant="outlined" square ><img src='Pune.png' alt="Pune" /><br/>Pune</Paper>
                </div>
                <div className={classes.root} >
                <Paper onClick={()=>handleNext("Bangalore")} variant="outlined" square ><img src='Bangalore.png' alt="Bangalore" /><br/>Bangalore</Paper>
                <Paper onClick={()=>handleNext("Chennai")} variant="outlined" square ><img src='Chennai.png' alt="Chennai" /><br/>Chennai</Paper>
                <Paper onClick={()=>handleNext("Hyderabad")} variant="outlined" square ><img src='Hyderabad.png' alt="Hyderabad" /><br/>Hyderabad</Paper>
                </div>
                <form onSubmit={()=>handleNext(city)}>
                    or  <TextField id="outlined-basic" label="City" variant="outlined" onChange={(e)=>{setCity(e.target.value)}} />
                </form >
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <button onClick={()=>props.handleback()}>BACK</button>
                {
                    submitted&&<button>NEXT</button>}
                </div>
            </div>
        )
    }

    export { Register3 }