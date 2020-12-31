import React from 'react'
import styles from '../../Styles/HomeMid.module.css';

const WhyShine = () => {
    return (
        <section className={styles.why_shine}>
            <h1>Why Shine</h1>
            <div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/candidates_icon.png'} alt=""/>
                    <div>
                    <strong>3.4 crores+</strong>
                    <p>Candidates</p>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/jobs_icon.png'} alt=""/>
                    <div>
                    <strong>300,000+</strong>
                    <p>Jobs</p>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies_icon.png'} alt=""/>
                    <div>
                    <strong>15,000+</strong>
                    <p>Compapnies</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyShine
