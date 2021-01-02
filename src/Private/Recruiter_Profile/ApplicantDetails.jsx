import { CircularProgress, Divider, LinearProgress, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "../../Styles/RecruiterProfile.module.css"
const ApplicantDetails = ({ handleClose }) => {
    const Data = useSelector(state => state.applicantReducer.applicantDetails[0])
    const loading = useSelector(state => state.applicantReducer.isLoading)
    const experinence=Data && Data.experience.split(" ")
 
    return  !loading ?(
    <div className={styles.modal}>
            <div style={{textAlign:"center",margin:4,position:'relative'}}>
                <h1 style={{fontFamily:'-moz-initial'}}>Applicant Details:</h1>
                   <p  onClick={handleClose} style={{position:'absolute',top:-30,right:-5,fontSize:40,cursor:'pointer',transform: 'rotate(45deg)',color:'red'}}>
                     +
                    </p>
            </div>
            <Divider/>
            <div className={styles.profileHeader}>
                <div  >
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
                        style={{cursor:'pointer'}}
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
                        style={{cursor:'pointer'}}
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
                        style={{cursor:'pointer'}}
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
                        style={{cursor:'pointer'}}
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
                    style={{cursor:'pointer'}}
                    label="Location"
                    InputProps={{
                        readOnly: true,
                    }}
                    defaultValue={Data.city}
                    variant="outlined"
                />
            </div>
            </div>
            <div className={styles.profileHeader}>
                <div>
                    <TextField
                        style={{cursor:'pointer'}}
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
                        style={{cursor:'pointer'}}
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
                        style={{cursor:'pointer'}}
                        label="Experience"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={`${experinence[0]}yrs ${experinence[1]}mnths`}
                        variant="outlined"
                    />
                </div>
            </div>
            <div className={styles.profileHeader}>
                <div>

                <TextField
                    style={{cursor:'pointer'}}
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
                    style={{cursor:'pointer'}}
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
                    style={{cursor:'pointer'}}
                    label="Qualification"
                    InputProps={{
                        readOnly: true,
                    }}
                    defaultValue={Data.education}
                    variant="outlined"
                />
            </div>
                </div>
            <div className={styles.profileHeader}>
                {
                    Data.skills.map(item=>
                        <div style={{color:'white',boxShadow:'0 0 12px 0 rgba(132,132,132,0.3)',fontWeight:'700',borderRadius:'5px',textAlign:'center',background:'#b8b8b8',padding:5,margin:5,width:'70px'}}>
                        {item}
                        </div>
                    )
                }
            </div>
        </div>
   
   ):(
       <div>
           <div style={{display:'grid',placeItems:'center',width:'400px',marginBottom:'10px'}}>
           <CircularProgress color="primary" />
           </div>
           <div style={{width:'400px'}}>
           <LinearProgress color="secondary" />
           </div>
           <div style={{display:'grid',placeItems:'center',width:'400px',marginTop:'10px'}}>
           <CircularProgress color="primary" />
           </div>

       </div>
   )
}

export { ApplicantDetails }
