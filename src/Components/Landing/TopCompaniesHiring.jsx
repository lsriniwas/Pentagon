import React from 'react'
import styles from '../../Styles/HomeMid.module.css';


const TopCompaniesHiring = () => {
    return (
        <section className={styles.top_companies}>
            <h1>Top companies hiring now</h1>
            <div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/aditya_birls.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/angel_broking.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/cms.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/fullerton.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/hp.png'} alt=""/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/icici.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/iifl.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/indegene.jpg'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/infinite.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/max_life.png'} alt=""/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/ps.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/reliance_general.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/reliance_insur.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/tech_mahindra.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/shine_images/companies/yes_bank.png'} alt=""/>
                </div>
            </div>
            <button>View all top companies</button>
        </section>
    )
}


export default TopCompaniesHiring
