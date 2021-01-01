import React from 'react'
import styles from '../../Styles/Navbar.module.css';

const RegFooter = () => {
    return (
        <div style={{marginTop:"50px",display:"flex", justifyContent:"space-around"}}>
            
            <p className={styles.links}>Feedback</p>
            <p className={styles.links}>FAQs</p>
            <p className={styles.links}>About Us</p>
            <p className={styles.links}>Contact Us</p>
            <p className={styles.links}>Privacy Policy</p>
            <p className={styles.links}>Security Advice</p>
            <p className={styles.links}>Business News</p>
            <p className={styles.links}>Terms & Conditions</p>
            <p className={styles.links}>Disclaimer</p>
            <p className={styles.links}>© 2020 HT Media Limited</p>
            
        </div>
    )
}

export default RegFooter

