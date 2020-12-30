import React from 'react'
import { KnowMore } from './KnowMore'
import styles from "./Recruiter.module.css"

const Content = () => {
    return (
        <div className={styles.contentbody}>
            <div>
                <h2>How can Shine Recruiter simplify your hiring goals?</h2>
            </div>
            <div className={styles.cardData}>
                <div className={styles.jobposting}>
                    <h2>Post a Job for Almost Free </h2>
                    <p>If a job posting is all you need, go for our Starter Plan</p>
                    <KnowMore/>
                </div>
                <div className={styles.smartsearch}>
                    <h2>Smart Search</h2>
                    <p>Access database and find relevant candidates with India’s most advanced keyword-search engine</p>
                    <KnowMore/>
                </div>
                <div className={styles.smartmatch}>
                    <h2>Smart Match</h2>
                    <p>Want to post a job and access database? Our Smart Match finds relevant candidates auto-matched to your keywords.</p>
                    <KnowMore/>
                </div>
            </div>
        </div>
    )
}

export { Content }
