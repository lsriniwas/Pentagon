import React, { Component } from "react"
import { connect } from "react-redux"
import { Regreq } from "../../redux/actions"
import { useSelector } from "react-redux"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const Register4 = props => {
    const [submitted, setSubmitted] = React.useState(false)
    const [experienced, setExperienced] = React.useState(false)
    const [years, setYears] = React.useState(0)
    const [months, setMonths] = React.useState(0)

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            margin: "auto",
            justifyContent: "center",
            '& > *': {
                margin: theme.spacing(2),
                width: theme.spacing(28),
                height: theme.spacing(16),
            },
        },
    }));
    const classes = useStyles();

    const handleNext = () => {
        if(experienced){
            var payload = {
                experienced:experienced,
                experience:years+" "+months
            }            
        }
        else {
            var payload = {
                experienced:false,
                company:false
            }
        }
        console.log(payload)
        props.handleSubmit(payload)
    }

    return (
        <div style={{ height: "500px", width: "782px", backgroundImage: `url('back1.jpg')`, marginLeft: "100px" }}>
            <h1>Have you ever worked?</h1>
            <div className={classes.root} >
                <Paper onClick={() => setExperienced(true)} variant="outlined" square ><img src='exp.png' alt="exp" /><br />Yes, I have Worked</Paper>
                <Paper onClick={handleNext} variant="outlined" square ><img src='fresher.png' alt="fresher" /><br />No, I don't have any Work Experience/I am a fresher</Paper>
            </div>
            {
                experienced && <div>
                    <h2>What's your total work experience?</h2>
                    <div style={{display:"flex"}}>
                        <TextField id="outlined-basic" label="Years" variant="outlined" onChange={(e) => { setYears(Number(e.target.value)) }} />
                        <TextField id="outlined-basic" label="Months" variant="outlined" onChange={(e) => { setMonths(Number(e.target.value)) }} /><br />
                    </div>
                </div>
            }
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => props.handleback()}>BACK</button>
                {
                    submitted && <button>NEXT</button>}
                {
                    experienced && <button onClick={() => handleNext("fresher")}>NEXT</button>}
            </div>
        </div>
    )
}


export { Register4 }