import React from 'react'
import styles from '../../Styles/HomeMid.module.css';
import SearchIcon from '@material-ui/icons/Search';

const LandingPageHeader = () => {
    return (
        <section className={styles.home_mid}> 
            <div className={styles.content}>
                <div className={styles.box_one}>
                    <h1>Growth on your mind?</h1>
                    <h2>Explore 300,000+ jobs</h2>
                    <div className={styles.white_box}>
                        <p>Job title, skills</p>
                        <SearchIcon color="primary"/>
                    </div>
                </div>
                <div className={styles.registration}>
                    <button>Register for free</button>
                    <div className={styles.sign_in}>
                        <p>Sign in</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPageHeader
