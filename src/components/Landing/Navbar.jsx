import React from 'react'
import styles from '../../Styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar_wrapper}>
            <img src={process.env.PUBLIC_URL + '/nav_logo.png'} alt="Logo" className={styles.logo}/>
            <p className={styles.links}>Search Jobs</p>
            <p className={styles.links}>Services</p>
            <p className={styles.links}>Resources</p>
            <p className={styles.links}>Recruiter</p>
            <p className={styles.links}>Walk-ins</p>
            <p className={styles.covid}>COVID-19 Career Guide</p>
            <p className={styles.links_border}>Create job alert</p>
            <p className={styles.links_border}>Post a job</p>
            <div className={styles.contact}>
                <p>080-471055555</p>
                <p>9am-6pm, Mon to Sat</p>
            </div>
        </div>
    )
}

export default Navbar

// <img src={process.env.PUBLIC_URL + '/yourPathHere.jpg'} />
