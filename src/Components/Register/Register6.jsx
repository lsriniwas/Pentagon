import React from "react"
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



const Register6 =props=>{

    const[name,setName]=React.useState("")
    const[degreeYear,setDegreeYear]=React.useState("")

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          margin:"auto",
          justifyContent:"center",
          '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: "max-content",
            padding:"10px"
          },
        },
      }));
      const classes = useStyles();
    
    const handleNext=(type)=>{
        const payload={
            institute_name:name,
            year_graduation:degreeYear,
            course_type:type

        }
        console.log(payload)
        props.handleSubmit(payload)
    }

        return (
            <div style={{height:"500px", width:"782px", backgroundImage:`url('back1.jpg')`, margin:"auto",marginTop:"50px",textAlign:"center"}}>
                <h1>From which institute did you complete {props.name}</h1>
                 <TextField id="outlined-basic" label="Institute Name" variant="outlined" onChange={(e)=>{setName(e.target.value)}}/><br/>
                 <TextField id="outlined-basic" label="Year of Completion" variant="outlined" onChange={(e)=>{setDegreeYear(e.target.value)}}/><br/> 
                 <h3>What was your course type?</h3>
                 <div className={classes.root} >
                    
                <Paper onClick={()=>handleNext("Full Time")} variant="outlined" square >Full Time</Paper>
                <Paper onClick={()=>handleNext("Part Time")} variant="outlined" square >Part Time</Paper>
                <Paper onClick={()=>handleNext("Correspondence")} variant="outlined" square >Correspondence</Paper>                
                </div>
                 <div style={{display:"flex", justifyContent:"space-between",position:"fixed", top:700}}>
                <button style={{marginLeft:"50px", backgroundColor: "white", padding: "5px", borderRadius: "5px", border: "1px solid gray"}} onClick={()=>props.handleback()}>BACK</button>
           </div>
                 
            </div>
        )
    }

export { Register6 }