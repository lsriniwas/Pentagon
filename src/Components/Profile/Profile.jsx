import { AppBar, Button, LinearProgress, Paper } from '@material-ui/core'
import React from 'react'
import { Footer } from '../Recruiter/Footer'
import styles from "../../Styles/Profile.module.css"
import "../../Styles/Profile.module.css"
import DashNav from '../Dashboard/DashNav'
import { SearchBar } from '../SearchBar/SearchBar'
import { useSelector } from "react-redux"



const Profile = () => {
    const data = useSelector((state) => state.auth.userdata)
    const experience=data && data.experience.split(" ")
    const salary=data && data.salary.split(" ")    
    
    return (
        <div>
            <DashNav
                name={data.name}
            />

            <div style={{ marginTop: "65px", width: "100%", backgroundColor: "#F4F5F5", height: "90px" }}>
                <SearchBar></SearchBar>
            </div>
            <div className={styles.profile_container}>
                <div className={styles.inner_container}>
                    <div className={styles.user_header}>
                        <div className={styles.user_header_left}>
                            <div className={styles.first_letter}>
                            {data.name[0].toUpperCase()}
                            </div>
                        </div>
                        <div className={styles.user_header_middle}>
                            <h2>{data && data.name}</h2>
                            <span>
                                Enthusiastic Graduate looking for Jobs
                                    </span>
                            <br />
                            <br />
                            <b>{data && data.email}</b>
                            <br />
                            <b>91-{data && data.contact}</b>
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
                                        <span>{data && data.name}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Email</strong>
                                    </div>
                                    <div>
                                        <span>{data && data.email}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Mobile</strong>
                                    </div>
                                    <div>
                                        <span>+91-{data && data.contact}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Date of birth</strong>
                                    </div>
                                    <div>
                                        <span>{data && data.dob}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Location</strong>
                                    </div>
                                    <div>
                                        <span>{data && data.city}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.strong_lable}>
                                        <strong >Gender</strong>
                                    </div>
                                    <div>
                                        <span>{data && data.gender}</span>
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
                                        <strong >Experience</strong>
                                    </div>
                                    <div>
                                        <span>{`${experience[0]}Years & ${experience[1]}Months `}</span>
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
                            {data && data.education}
                            </div>
                            <div>
                            {data && data.year_graduation}
                            </div>
                            <div>
                            {`${data.institute_name} || ${data.course_type} `}
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <br/>
                         <div>
                            <h1>Skills</h1>
                        </div>
                        {
                            data&& data.skills.map(item =>
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
                                        <span>{`₹ ${salary[0]}Lakh ${salary[1]}Thousand `}</span>
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