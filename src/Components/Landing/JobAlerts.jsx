import React from 'react'
import styles from '../../Styles/HomeMid.module.css';

const JobAlerts = () => {
    return (
        <section className={styles.job_alert}>
            <h2>Get instant job alerts from top companies</h2>
            <p>Be the first one to apply to jobs</p>
            <div className={styles.job_alert_content}>
                <img src={process.env.PUBLIC_URL + '/shine_images/app_base.png'} alt=""/>
                <div className={styles.job_alert_content_right}>
                    <div className={styles.mobile_alert}>
                        <div>91 <span>Mobile</span></div>
                        <button>Get App</button>
                    </div>
                    <div>
                        <div className={styles.rating}>
                            <p>Rated</p>
                            <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                            <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                            <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                            <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                            <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                            <p>|</p>
                            <strong>10 million</strong>
                            <p>downloads</p>
                        </div>
                    </div>
                    <div className={styles.store_button}>
                        <button> <img src={process.env.PUBLIC_URL + '/shine_images/playstore.png'} alt=""/> <span>Google Play</span></button>
                        <button> <img src={process.env.PUBLIC_URL + '/shine_images/appstore.png'} alt=""/> App Store</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobAlerts
