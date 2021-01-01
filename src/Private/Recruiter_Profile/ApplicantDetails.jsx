import { Divider, LinearProgress, TextField } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../../Styles/RecruiterProfile.module.css"
const ApplicantDetails = ({ handleClose }) => {
    const Data = useSelector(state => state.applicantReducer.applicantDetails[0])
    const loading = useSelector(state => state.applicantReducer.isLoading)
    console.log(Data)
    return !loading ?(
   
    <div className={styles.modal}>
            <div style={{textAlign:"center",margin:4,position:'relative'}}>
                <h1>Applicant Details:</h1>
                   <p  onClick={handleClose} style={{position:'absolute',top:-30,right:-5,fontSize:40,cursor:'pointer',transform: 'rotate(45deg)',color:'red'}}>
                     +
                    </p>
            </div>
            <Divider/>
            <div className={styles.profileHeader}>
                <div>
                    <TextField
                        label="Name"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={Data.name}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        label="Email"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={Data.email}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        label="Contact"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={Data.contact}
                        variant="outlined"
                    />
                </div>
            </div>
            <div className={styles.profileHeader}>
                <div>
                    <TextField
                        label="DOB"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={Data.dob}
                        variant="outlined"
                    />

                </div>
                <div>
                    <TextField
                        label="Gender"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={Data.gender}
                        variant="outlined"
                    />
                </div>
                <div>
                <TextField
                    label="Location"
                    InputProps={{
                        readOnly: true,
                    }}
                    defaultValue={Data.location}
                    variant="outlined"
                />
            </div>
            </div>
            <div className={styles.profileHeader}>
                <div>
                    <TextField
                        label="Course Type"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={Data.course_type}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        label="Department"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={Data.department}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        label="Experience"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={Data.experience}
                        variant="outlined"
                    />
                </div>
            </div>
            <div className={styles.profileHeader}>
                <div>

                <TextField
                    label="Desired Job"
                    InputProps={{
                        readOnly: true,
                    }}
                    defaultValue={Data.desired_job}
                    variant="outlined"
                    />
                    </div>

            <div>
                <TextField
                    label="Institute Name"
                    InputProps={{
                        readOnly: true,
                    }}
                    defaultValue={Data.institute_name}
                    variant="outlined"
                    />
            </div>
            <div>
                <TextField
                    label="Qualification"
                    InputProps={{
                        readOnly: true,
                    }}
                    defaultValue={Data.qualification}
                    variant="outlined"
                />
            </div>
                </div>
            <div className={styles.profileHeader}>
                <TextField
                    label="Skills"
                    InputProps={{
                        readOnly: true,
                    }}
                    fullWidth
                    defaultValue={Data.skill}
                    variant="outlined"
                />
            </div>
        </div>
   
   ):(
       <div>
           <LinearProgress />
       </div>
   )
}

export { ApplicantDetails }
