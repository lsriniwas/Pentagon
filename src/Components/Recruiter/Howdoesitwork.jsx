import React from 'react'
import styles from "./Recruiter.module.css"

export const Howdoesitwork = () => {
    return (
        <div className={styles.howdoesitwork}>
            <div className={styles.howdoesitworkContent}>
                <h2>How does it work?</h2>
                <p>Our recruiter service is specially formulated to cater the needs of recruitment across various industries and location. You can select a plan basis your requirement from our list of extensive packages listed. In order to continue with the selected plan, you must register with us by filling a form or sign in through your employer login details. You can also opt for our demo session to test-run our online recruitment services to take a sneak peak at the better hiring process.</p>
            </div>
            <div className={styles.howdoesitworkImage}>
                <img src={process.env.PUBLIC_URL + '/howitwork.png'} alt="howitworkLOGO"/> 
            </div>
        </div>
    )
}
