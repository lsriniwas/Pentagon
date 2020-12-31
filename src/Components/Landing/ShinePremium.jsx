import React from 'react'
import styles from '../../Styles/HomeMid.module.css';

const ShinePremium = () => {
    return (
        <section className={styles.premium}>
            <div className={styles.premium_image}></div>
            <span className={styles.premium_crown}><img src={process.env.PUBLIC_URL + '/shine_images/premium_crown.png'} alt=""/></span>
            <h1 className={styles.premium_title}>Shine Premium</h1>
            <div className={styles.premium_content}>
                <strong>Fastrack your job search with our premium services</strong>
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/green_tick.png'} alt=""/>
                        <p>Enhanced Profile</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/green_tick.png'} alt=""/>
                        <p>10x higher visibility to recruiters</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/green_tick.png'} alt=""/>
                        <p>Insights on other applicants</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/green_tick.png'} alt=""/>
                        <p>Interview Ready</p>
                    </div>
                </div>
            </div>
            <div className={styles.premium_button}>Get Shine Premium</div>
        </section>
    )
}

export default ShinePremium
