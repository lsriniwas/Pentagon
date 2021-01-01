import React from "react"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const Register5 =props=>{
    

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          margin:"auto",
          justifyContent:"center",
          '& > *': {
            margin: theme.spacing(1),
            width: "max-content",
            height: "max-content",
            padding:"10px"
          },
        },
      }));
      const classes = useStyles();

      const handleNext=(education)=>{
        const payload={
            education:education
        }
        console.log(payload)
        props.handleSubmit(payload)
    }

  return (
            <div  style={{height:"500px", width:"782px", backgroundImage:`url('back1.jpg')`, margin:"auto",marginTop:"50px"}}>
                <h1>Let us know your highest educational qualification</h1>
                <div className={classes.root} >
                <Paper onClick={()=>handleNext("M.C.A")} variant="outlined" square >M.C.A</Paper>
                <Paper onClick={()=>handleNext("M.Sc")} variant="outlined" square >M.Sc</Paper>
                <Paper onClick={()=>handleNext("B.A")} variant="outlined" square >B.A</Paper>
                <Paper onClick={()=>handleNext("B.Sc")} variant="outlined" square >B.Sc</Paper>
                <Paper onClick={()=>handleNext("B.Com")} variant="outlined" square >B.Com</Paper>
                <Paper onClick={()=>handleNext("B.Ed")} variant="outlined" square >B.Ed</Paper>
                </div>
                <div className={classes.root} >
                <Paper onClick={()=>handleNext("B.Tech/B.E")} variant="outlined" square >B.Tech/B.E</Paper>
                <Paper onClick={()=>handleNext("M.Tech")} variant="outlined" square >M.Tech</Paper>
                <Paper onClick={()=>handleNext("MBA/PGDM")} variant="outlined" square >MBA/PGDM</Paper>
                </div>
                <div className={classes.root} >
                <Paper onClick={()=>handleNext("Other")} variant="outlined" square >View More Qualifications</Paper>                
                </div>
            </div>
        )
    }


    export { Register5 }