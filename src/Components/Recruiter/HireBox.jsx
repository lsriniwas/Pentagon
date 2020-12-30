import React from 'react'
import styles from "./Recruiter.module.css"

const HireBox = () => {
    return (
        <div className={styles.hirebox}>
            <div>
                <div className={styles.hireboxContent}>
                    <h2>Hire the best talent</h2>
                </div>
                <div className={styles.hireboxContentDetails}>
                    <div className={styles.hireboxContentParts}>
                        <div className={styles.hireboxContentImage}>
                        </div>
                        <div ><h4>Top Profiles</h4><ul><li>Brand Manager</li><li>Talent Acquisition Lead</li><li>Chief Technology Officer</li><li>Business Analyst</li><li>Supply Chain Manager</li></ul></div>
                    </div>
                    <div className={`${styles.hireboxContentParts} ${styles.hireboxContentPartsBorder}`}>
                        <div className={styles.hireboxContentImage2}>
                        </div>
                        <div ><h4>Top Colleges</h4>
                            <ul>
                               <li>Indian Institute of Management, Bangalore</li>
                               <li>Indian Institute of Technology, Delhi</li>
                               <li>National Institute of Fashion Technology</li>
                               <li>XLRI</li>
                               <li>Delhi University</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.hireboxContentParts}>
                        <div className={styles.hireboxContentImage3}>
                        </div>
                        <div ><h4>Top Skills</h4>
                        <ul>
                               <li>Java Developer</li>
                               <li>Business Development</li>
                               <li>Cloud Computing</li>
                               <li>Digital Marketing</li>
                               <li>Automation Testing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HireBox }
