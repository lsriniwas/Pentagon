import React from 'react'
import styles from '../../Styles/HomeMid.module.css';

const RecruitSmart = () => {
    return (
        <section className={styles.recruit_smart}>
            <h2>Recruit smart, recruit right</h2>
            <div className={styles.recruit_smart_content}>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/id.png'} alt=""/>
                    <p>Over 3.4 crore <br/> qualified candidates</p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/bag.png'} alt=""/>
                    <p>Get smart responses with unique <br/> two-way matching technology</p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/thumbsup.png'} alt=""/>
                    <p>Highlight your company as a <br/> great place to work</p>
                </div>
            </div>
            <button>Post a job almost free</button>
        </section>
    )
}

export default RecruitSmart
