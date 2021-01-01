import React from "react"
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



const Register7 =props=>{
    const[skill,setSkill]=React.useState("")
    const[skills,setSkills]=React.useState([])
    

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
    
    const handleNext=()=>{
        const payload={
            skill:skills

        }
        console.log(payload)
        props.handleSubmit(payload)
    }

        return (
            <div style={{height:"500px", width:"782px", backgroundImage:`url('back1.jpg')`, margin:"auto",marginTop:"50px"}}>
                <h1>Tell us about your Skills</h1>
                <h3>Add 6 or more skills to get 3X more recruiter views</h3>
                 <TextField id="outlined-basic" label="Enter Skill Name" variant="outlined" onChange={(e)=>setSkill(e.target.value)}/><br/>
                 <button onClick={()=>setSkills([...skills,skill])}>Add Skill</button>
                 <div className={classes.root} >
                     {
                        skills.length>0 && skills.map((item)=>(
                            <Paper  variant="outlined" square >{item}</Paper>
                         ))
                     }            
                </div>
                 <div style={{display:"flex", justifyContent:"space-between"}}>
                <button onClick={()=>props.handleback()}>BACK</button>
                 <button onClick={handleNext}>Next</button>
                
                
                </div>
                 
            </div>
        )
    }

export { Register7 }

