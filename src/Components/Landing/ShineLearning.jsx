import React from 'react'
import styles from '../../Styles/HomeMid.module.css';

const ShineLearning = () => {
    return (
        <section className={styles.shine_learning}>
            <div>
                <img src={process.env.PUBLIC_URL + '/shine_images/s-learning.png'} alt=""/>
                <h2>Want to make your career future ready?</h2>
                <h3>Upgrade your skills, give your career a boost</h3>
                <div>Explore courses</div>
            </div>
        </section>
    )
}

export default ShineLearning
