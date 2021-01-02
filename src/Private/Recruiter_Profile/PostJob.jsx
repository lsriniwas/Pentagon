import { Button, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { postJob } from '../../Redux/RecruiterProfile/actions'
import { CustomHook } from './CustomHook'
import styles from "../../Components/Recruiter/Recruiter.module.css"

const init = {
    "experience": "",
    "skills": "",
    "qualification_required": "",
    "industry": "",
    "recruiter_id": "",
    "jobtitle": "",
    "company": "",
    "city": "",
    "salary": "",
    "date": new Date().toDateString(),
    "snippet": "",
    "applied": []
}

//.MuiTextField-root	Global Class
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(3),
        width: '400px',
      },
    },
    Button:{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 50,
        width:"400px",
        padding: '0 30px',
        outline:"none"
        
    }

  }));

const PostJob = ({Id}) => {
    const classes=useStyles();
    const [value, setValue] = CustomHook(init);
    const dispatch = useDispatch();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const payload={...value,recruiter_id:Id}
        dispatch(postJob(payload))
        setValue(init)
        alert("Job Posted Successfully")

    }
    return (
        <div className={styles.formData}>
            <form className={classes.root} >
                <div className={styles.formInput}>
                    <TextField size='small' id="outlined-basic" variant="outlined" label="Job Title" value={value.jobtitle}
                        type="text"
                        name="jobtitle"
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div className={styles.formInput}>
                    <TextField size='small'
                        variant="outlined"
                        label="Company"
                        value={value.company}
                        type="text"
                        name="company"
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div className={styles.formInput}>
                    <TextField size='small'
                        variant="outlined"
                        label="City"
                        value={value.city}
                        type="text"
                        name="city"
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div className={styles.formInput}>
                    <TextField size='small'
                        variant="outlined"
                        label="salary"
                        value={value.salary}
                        type="text"
                        name="salary"
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div className={styles.formInput}>
                    <TextField size='small'
                        variant="outlined"
                        label="Experience needed
                    " value={value.experience}
                        type="text"
                        name="experience"
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div className={styles.formInput}>
                    <TextField size='small'
                        variant="outlined"
                        label="Qualifications"
                        value={value.qualification_required}
                        type="text"
                        name="qualification_required"
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div className={styles.formInput}>
                    <TextField size='small'
                        variant="outlined"
                        label="Skills"
                        value={value.skills}
                        type="text"
                        name="skills"
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div className={styles.formInput}>
                    <TextField size='small'
                        variant="outlined"
                        label="Industry"
                        value={value.industry}
                        type="text"
                        name="industry"
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                <div className={styles.formInput}>
                    <TextField size='small'
                        variant="outlined"
                        id="standard-multiline-flexible"
                        label="Job Description"
                        multiline
                        name="snippet"
                        rows={4}
                        value={value.snippet}
                        fullWidth
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                </div>
                <div>
                    <Button onClick={handleFormSubmit} className={classes.Button}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export { PostJob }


