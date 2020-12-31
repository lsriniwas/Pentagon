import React from 'react'
import styles from '../../Styles/HomeMid.module.css';

const ResumeHelper = () => {
    return (
        <section className={styles.resume}>
            <h2>Having trouble writing your resume?</h2>
            <div>
                <div>
                    <div className={styles.resume_white_box}>
                        <div>
                            <strong>Resume writing</strong>
                            <p>Highlight right skills on resume to get noticed by recruiters and hired faster</p>
                            <button className={styles.resume_button}>Get expert help</button>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/r_writing.png'} alt=""/>
                    </div>
                    <div className={styles.resume_white_box}>
                        <div>
                            <strong>Resume Builder</strong>
                            <p>Build impressive resume instantly with ready to use templates</p>
                            <button className={styles.resume_button}>Build your resume</button>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/r_builder.png'} alt=""/>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/resume_writing.png'} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default ResumeHelper
