import React from 'react'
import styles from '../../Styles/HomeMid.module.css';

const InfosysAdvt = () => {
    return (
        <section className={styles.ad_banner}>
            <img src={process.env.PUBLIC_URL + '/shine_images/ad_banner_new.png'} alt="banner" />
        </section>
    )
}

export default InfosysAdvt
