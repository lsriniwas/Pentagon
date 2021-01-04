import React from 'react'
import { useHistory } from 'react-router-dom';
import styles from '../../Styles/Navbar.module.css';

const Navbar = () => {
    const history = useHistory()
    const handlePostJob = () => {
        history.push("/recruiter")
    }
    return (
        <div className={styles.navbar_main}>
        
        <div className={styles.navbar_wrapper} >
            <img src={process.env.PUBLIC_URL + '/nav_logo.png'} alt="Logo" className={styles.logo} />
            <p className={styles.links}>Search Jobs</p>
            <p className={styles.links}>Services</p>
            <p className={styles.links}>Resources</p>
            <p className={styles.links}>Recruiter</p>
            <p className={styles.links}>Walk-ins</p>
            <p className={styles.covid}>COVID-19 Career Guide</p>
            </div>
            <div style={{display:"flex"}}></div>
            <p className={styles.links_border} style={{marginRight:"20px"}}>Create job alert</p>
            <p className={styles.links_border} onClick={handlePostJob} >Post a job</p>
            <div className={styles.contact} style={{ color:"white", width:"max-content", fontSize:"larger", marginRight:"80px", marginLeft:"40px"}}>
                <p>080-471055555</p>
                <p>9am-6pm, Mon to Sat</p>
            </div>
        </div>
    )
}

export default Navbar

