import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';




const RegProgress = props => {
console.log("Stage",props.stage)
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }));
    const classes = useStyles();    

    const steps = ['Registation','Personal','Experirence','Education','Skills','Resume'];


    return (
        <div style={{ height: "max-content", width: "782px", backgroundImage: `url('back1.jpg')`, margin: "auto", marginTop: "50px" }} className={classes.root}>
            <Stepper activeStep={props.stage} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export { RegProgress }