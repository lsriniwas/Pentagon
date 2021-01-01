import { AppBar, Button, LinearProgress, Paper } from '@material-ui/core'
import React from 'react'
import { Footer } from '../Recruiter/Footer'
import styles from "../../Styles/Profile.module.css"
import "../../Styles/Profile.module.css"
const Profile = () => {

    const skill = ["Computer Science", "Algorithm", "Data Structure", "Javascript"]

    return (
        <div>
            <AppBar position='relative'>
                HEllo
                <br />
                hello
                <br />
                HEllo
            </AppBar>
            <div style={{ height: '70px', border: '1px solid black' }}>

            </div>
            <div className={styles.profile_container}>
                <div className={styles.inner_container}>
                    <div className={styles.user_header}>
                        <div className={styles.user_header_left}>
                            <div className={styles.first_letter}>
                                L
                            </div>
                        </div>
                        <div className={styles.user_header_middle}>
                            <h2>Lanka Sriniwas</h2>
                            <span>
                                Profile title Not mentioned
                                    </span>
                            <br />
                            <br />
                            <b>sriniwas@gmail.com</b>
                            <br />
                            <b>91-9876543210</b>
                            <span>
                                Verify
                                        </span>
                        </div>
                        <div className={styles.user_header_right}>
                            <div className={styles.profile_score}>
                                <div>
                                    ProfileScore
                               </div>
                                <div>
                                    Average
                               </div>
                            </div>
                            <div>
                                <LinearProgress variant="determinate" value={60} />
                            </div>
                            <div className={styles.last_updated}>
                                {`Last updated on ${new Date().toDateString()}, ${new Date().toLocaleTimeString()} `}
                            </div>
                        </div>
                    </div>
                    <div className={styles.user_profile}>
                        <div>
                            <h1>Personal</h1>
                        </div>
                        <br/>
                        <div>
                            <ul>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Name</strong>
                                    </div>
                                    <div>
                                        <span>Sriniwas</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Email</strong>
                                    </div>
                                    <div>
                                        <span>sriniwas@gmail.com</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Mobile</strong>
                                    </div>
                                    <div>
                                        <span>+91-9876543210</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Date of birth</strong>
                                    </div>
                                    <div>
                                        <span>Not mentioned</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Location</strong>
                                    </div>
                                    <div>
                                        <span>Bangalore</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Gender</strong>
                                    </div>
                                    <div>
                                        <span>Male</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.user_profile}>
                        <div>
                            <h1>Work Summary</h1>
                        </div>
                        <br/>

                        <div>
                            <ul>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Profile Title</strong>
                                    </div>
                                    <div>
                                        <span>Not Mentioned</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Profile Summary</strong>
                                    </div>
                                    <div>
                                        <span>Not Mentioned</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Total Experience</strong>
                                    </div>
                                    <div>
                                        <span>0 Months</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.booster}>
                    <img src={process.env.PUBLIC_URL+'/shine_images/user_profile/booster.png'} width="100%" alt=""/>
                    </div>
                    <div className={styles.education}>
                        <br/>
                        <div>
                            <h1>Education</h1>
                        </div>
                        <br/>
                        <div className={styles.education_init_name}>
                            <div>
                                B.COM
                            </div>
                            <div>
                                Commerce
                            </div>
                            <div>
                                NHC  (Full Time) | 2019
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <br/>
                         <div>
                            <h1>Skills</h1>
                        </div>
                        {
                            skill.map(item =>
                                <>
                                <div className={styles.indivi}>
                                   <div>
                                       <p>
                                    {item}
                                       </p>
                                    </div> 
                                    <div>
                                    <p className={styles.indivi_assessment}>
                                    Take assessment 
                                     </p>
                                    </div>
                                </div>
                                <hr/>
                                </>
                            )
                        }
                    </div>
                    <div className={styles.user_profile}>
                        <br/>
                        <div>
                            <h1>Desired Job Details</h1>
                        </div>
                        <br/>
                        <div>
                            <ul>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong>Job Role</strong>
                                    </div>
                                    <div>
                                        <span>Frontend Web Developer</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Job Location</strong>
                                    </div>
                                    <div>
                                        <span>Bangalore</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Industry</strong>
                                    </div>
                                    <div>
                                        <span>IT - Software</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Job Type</strong>
                                    </div>
                                    <div>
                                        <span>Not mentioned</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Department</strong>
                                    </div>
                                    <div>
                                        <span>Web / Mobile Technologies</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong>Shift Type</strong>
                                    </div>
                                    <div>
                                        <span>I am not interested in a Shift Based Job</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Salary</strong>
                                    </div>
                                    <div>
                                        <span>Rs 10 - 12 Lakh / Yr</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.advertisement}>
                    <div className={styles.ad_boxes}>
                        <img src={process.env.PUBLIC_URL+'/shine_images/user_profile/premium1.png'} height="250px" width="250px" alt=""/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export {Profile}