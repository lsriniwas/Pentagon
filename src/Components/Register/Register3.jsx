import React from "react"
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
            <div  style={{height:"500px", width:"782px", backgroundImage:`url('back1.jpg')`, margin:"auto",marginTop:"50px", textAlign:"center"}}>
                <h1 style={{marginTop:"10px"}}>Which city do you live in?</h1>
                
                <div className={classes.root} style={{textAlign:"center"}} >
                <Paper onClick={()=>handleNext("Delhi NCR")} variant="outlined" square style={{marginTop:"20px"}}><img src='Delhi NCR.png' alt="Delhi NCR" style={{marginTop:"10px"}} /><br/>Delhi NCR</Paper>
                <Paper onClick={()=>handleNext("Mumbai")} variant="outlined" square style={{marginTop:"20px"}} ><img src='Mumbai.png' alt="Mumbai" style={{marginTop:"10px"}} /><br/>Mumbai</Paper>
                <Paper onClick={()=>handleNext("Pune")} variant="outlined" square style={{marginTop:"20px"}} ><img src='Pune.png' alt="Pune" style={{marginTop:"10px"}} /><br/>Pune</Paper>
                </div>
                <div className={classes.root} style={{textAlign:"center"}} >
                <Paper onClick={()=>handleNext("Bangalore")} variant="outlined" square style={{marginTop:"00px"}} ><img src='Bangalore.png' alt="Bangalore" style={{marginTop:"10px"}} /><br/>Bangalore</Paper>
                <Paper onClick={()=>handleNext("Chennai")} variant="outlined" square style={{marginTop:"00px"}} ><img src='Chennai.png' alt="Chennai" /><br/>Chennai</Paper>
                <Paper onClick={()=>handleNext("Hyderabad")} variant="outlined" square style={{marginTop:"00px"}} ><img src='Hyderabad.png' alt="Hyderabad" style={{marginTop:"10px"}} /><br/>Hyderabad</Paper>
                </div>
                <form onSubmit={()=>handleNext(city)} style={{fontSize:"30px", marginLeft:"20px",marginBottom:"20px"}}>
                    or  <TextField size='small' id="outlined-basic" label="City" variant="outlined" onChange={(e)=>{setCity(e.target.value)}} />
                </form >
                <div style={{display:"flex", justifyContent:"space-between" }}>
                <button style={{marginLeft:"30px", backgroundColor:"white", padding:"5px",borderRadius:"5px", border:"1px solid gray"}} onClick={()=>props.handleback()}>⇦ Previous</button>
                {
                    submitted&&<button>NEXT</button>}
                </div>
            </div>
        )
    }

    export { Register3 }