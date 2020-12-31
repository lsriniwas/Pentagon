import React, { useState } from 'react'
import styles from "../../Styles/RecruiterProfile.module.css"
import "../../Styles/RecruiterProfile.module.css"
import { PostJob } from './PostJob'
import { PostedJobs } from './PostedJobs'
import { AllJobs } from './AllJobs'

const ProfileContainer = () => {
    const [postJob,setPostJob]=useState(false)
    const [aAllPostedJobs,setAllPostedJobs]=useState(false)
    const [allJob,setAllJob]=useState(false)

    
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileContainerMain}>
                <div className={styles.profileContainerDetails}>
                    <div className={styles.firstLetter}>
                        L
                    </div>
                    <div className={styles.profileData}>
                        <div className={styles.profile}>
                            <h1>Check1</h1>
                            <p>Consultant</p>
                            <br/>   
                            <div>
                            <p>xyz@gmail.com</p>
                            <strong>9876543221</strong>
                            </div>
                        </div>
                        <div className={styles.profile}>
                            <strong>XYZ Corp</strong>
                        </div>
                        <div className={styles.profile}>
                            <strong>Bangalore</strong>
                        </div>

                    </div>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.mainContentHeader}>
                       
                        <button  onClick={e=>{
                            setPostJob(true)
                            setAllPostedJobs(false)
                            setAllJob(false)
                        }}>
                            POST JOB
                        </button>
                        
                        <button  onClick={e=>{
                            setPostJob(false)
                            setAllPostedJobs(true)
                            setAllJob(false)
                        }}>
                        JOBS POSTED
                        </button>
                        <button onClick={e=>{
                            setPostJob(false)
                            setAllPostedJobs(false)
                            setAllJob(true)
                        }}>
                            ALL JOBS
                        </button>
                    </div>

                     <div className={styles.selectOption}>
                        { postJob&&
                            <PostJob/>
                        }
                        {aAllPostedJobs&&
                            <PostedJobs/>
                        }
                        {allJob&&
                            <AllJobs/>
                        }
                     </div>
                </div>
            </div>
            <div className={styles.advertisement}>
                <div className={styles.advertisementfirst}>
                    advertisement
                </div>
                <div className={styles.advertisementsecond}>
                    advertisement
                </div>
            </div>
        </div>
    )
}

export { ProfileContainer }

