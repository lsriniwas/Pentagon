import React, { useState } from 'react'
import styles from "../../Styles/RecruiterProfile.module.css"
import "../../Styles/RecruiterProfile.module.css"
import { PostJob } from './PostJob'
import { PostedJobs } from './PostedJobs'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchAllPostedByUser } from '../../Redux/RecruiterProfile/actions'



const ProfileContainer = () => {
    const [postJob,setPostJob]=useState(false)
    const [aAllPostedJobs,setAllPostedJobs]=useState(false)
    const dispatch=useDispatch();
    const history=useHistory();
    const[presentUser,setPresentuser]=useState(history.location.state)
    const Data=presentUser.formData
    const First=Data.name.split("")

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileContainerMain}>
                <div className={styles.profileContainerDetails}>
                    <div className={styles.firstLetter}>
                        {First[0].toUpperCase()}
                    </div>
                    <div className={styles.profileData}>
                        <div className={styles.profile}>
                            <h1>{Data.name}</h1>
                            <p>{Data.type}</p>
                            <div>
                            <p>{Data.email}</p>
                            <strong>{Data.contact}</strong>
                            </div>
                        </div>
                        <div className={styles.profile}>
                            <strong>{Data.company_name}</strong>
                        </div>
                        <div className={styles.profile}>
                            <strong>{Data.location}</strong>
                        </div>

                    </div>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.mainContentHeader}>
                       
                        <button  onClick={e=>{
                            setPostJob(false)
                            setAllPostedJobs(true)
                        }}
                        style={{background:"#4C31BE",outline:"none",border:'none'}}
                        className={styles.selectOption}
                        >
                        JOBS POSTED
                        </button>
                        <button  onClick={e=>{
                            setPostJob(true)
                            setAllPostedJobs(false)
                        }}
                        style={{background:"#4C31BE",outline:"none",border:'none'}}
                        className={styles.selectOption}
                        >
                            POST JOB
                        </button>
                        
                       
                    </div>

                     <div >
                        { postJob&&
                            <PostJob Id={Data.id}/>
                        }
                        {aAllPostedJobs&&
                            <PostedJobs presentUser={presentUser}/>
                        }
                       
                     </div>
                </div>
            </div>
            <div className={styles.advertisement}>
                <div className={styles.advertisementfirst}>
                   <img src={process.env.PUBLIC_URL+'/shine_images/recruiter_profile/img3.jpg'} alt=""/>
                </div>
                <div className={styles.advertisementsecond}>
                <img src={process.env.PUBLIC_URL+'/shine_images/recruiter_profile/img2.jpg'} alt=""/>                 
                </div>
            </div>
        </div>
    )
}

export { ProfileContainer }

