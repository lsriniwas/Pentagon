import React from 'react'
import styles from '../../Styles/HomeMid.module.css';
import CenteredTabs from './Tabs';

const BrowseJobs = () => {
    return (
        <section className={styles.browse_jobs}>
            <h2>Browse Jobs</h2>
            <div>
                <CenteredTabs/>
            </div>
            <div className={styles.job_list}>
                <div>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                </div>
                <div>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                </div>
                <div>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                    <p>IT-Software Jobs <span>(45551)</span></p>
                    <p>Recruitment Services Jobs <span>(45551)</span></p>
                </div>
            </div>
            <button>Job by industries</button>
        </section>
    )
}

export default BrowseJobs
