import React from 'react'
import { KnowMore } from './KnowMore'
import styles from "./Recruiter.module.css"
const JobPortal = () => {
    return (
        <div className={styles.jobPortal}>
            <div className={styles.heading}>We're more than just a job portal
            </div>
            <div className={styles.jobPortalContent}>
                <div>
                    <img alt="employer branding" src={process.env.PUBLIC_URL + '/employeebranding.jpg'} width="460px"/>
                    <div className={styles.jobPortalContentInnerStyling}>
                    <h3>Employer Branding</h3>
                    <p>Highlight your company as a great place to work with our Employer Branding solutions and attract more candidates. Use our expertise for Facebook or LinkedIn page management, E-mailers &amp; SMS marketing.</p>
                    <KnowMore/>
                    </div>
                </div>
                <div>
                    <img alt="shine hr conclave" src={process.env.PUBLIC_URL+'/conclave2.jpg'} width="460px"/>
                   <div className={styles.jobPortalContentInnerStyling}>
                    <h3>Shine HR Conclave</h3>
                    <p>Shine HR Conclave brings the top HR minds together to discuss recruitment industry trends. </p>
                    <KnowMore/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export {JobPortal}
