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
            skills:skills

        }
        console.log(payload)
        props.handleSubmit(payload)
    }

        return (
            <div style={{height:"500px", width:"782px", backgroundImage:`url('back1.jpg')`, margin:"auto",marginTop:"50px",textAlign:"center"}}>
                <h1>Tell us about your Skills</h1>
                <h3>Add 6 or more skills to get 3X more recruiter views</h3>
                 <TextField id="outlined-basic" label="Enter Skill Name" variant="outlined" onChange={(e)=>setSkill(e.target.value)}/><br/>
                 <button style={{marginTop:"10px",backgroundColor:"white", padding:"5px",borderRadius:"5px", border:"1px solid gray"}} onClick={()=>setSkills([...skills,skill])}>Add Skill</button>
                 <div className={classes.root} >
                     {
                        skills.length>0 && skills.map((item)=>(
                            <Paper style={{borderRadius:"5px"}} variant="outlined" square >{item}</Paper>
                         ))
                     }            
                </div>
                 <div style={{display:"flex", width:'100%', justifyContent:"space-between", top:500}}>
                     <div>
                 <button style={{marginTop:"200px", marginLeft:"30px", backgroundColor:"white", padding:"5px",borderRadius:"5px", border:"1px solid gray"}}>Previous</button>
                     </div>
                     <div>
                 <button style={{marginTop:"200px", marginRight:"30px", backgroundColor:"white", padding:"5px",borderRadius:"5px", border:"1px solid gray"}} onClick={handleNext}>Next</button>
                     </div>
                </div>
                 
            </div>
        )
    }

export { Register7 }

