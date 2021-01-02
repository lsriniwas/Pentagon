import React from "react"
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
        <div style={{ height: "500px", width: "782px", backgroundImage: `url('back1.jpg')`, margin:"auto",marginTop:"50px",textAlign:"center" }}>
            <h1 >Have you ever worked?</h1>
            <div className={classes.root} >
                <Paper style={{borderRadius:"10px"}} onClick={() => setExperienced(true)} variant="outlined" square ><img src='exp.png' alt="exp" /><br />Yes, I have Worked</Paper>
                <Paper style={{borderRadius:"10px"}} onClick={handleNext} variant="outlined" square ><img src='fresher.png' alt="fresher" /><br />No, I don't have any Work Experience/I am a fresher</Paper>
            </div>
            {
                experienced && <div style={{textAlign:"center"}}>
                    <h2>What's your total work experience?</h2>
                    <div style={{display:"flex",marginLeft:"170px"}}>
                        <TextField id="outlined-basic" label="Years" variant="outlined" onChange={(e) => { setYears(Number(e.target.value)) }} />
                        <TextField id="outlined-basic" label="Months" variant="outlined" onChange={(e) => { setMonths(Number(e.target.value)) }} /><br />
                    </div>
                </div>
            }
            <div style={{ display: "flex", justifyContent: "space-between" ,height:"30px",position:"fixed", top:500  }}>
            <button style={{marginTop:"200px", marginLeft:"30px", backgroundColor:"white", padding:"5px",borderRadius:"5px", border:"1px solid gray"}} onClick={()=>props.handleback()}>⇦ Previous</button>
                {
                    submitted && <button style={{marginTop:"200px", marginLeft:"30px", backgroundColor:"white", padding:"5px",borderRadius:"5px", border:"1px solid gray"}}>NEXT</button>}
                {
                    experienced && <button style={{marginTop:"200px", marginLeft:"570px", backgroundColor:"white", padding:"5px",borderRadius:"5px", border:"1px solid gray"}} onClick={() => handleNext("fresher")}>NEXT</button>}
            </div>
        </div>
    )
}


export { Register4 }