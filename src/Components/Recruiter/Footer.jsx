import React from 'react'
import styles from "./Recruiter.module.css"

const Footer = () => {
    return (
        <div className={styles.footerMain}>
            
            <div className={styles.footerMidSection}>
                <div style={{flexGrow:1}}>
                    <p className={styles.footerInfo}>
                        If you are looking for any information, please feel free to contact us. We will be glad to help.
                    </p>         
                    <div className={styles.phoneANDemail}>
                        <div className={styles.phone}>
                        </div>
                            <p>
                              080-47105555
                            </p>
                        <div className={styles.email}>
                        </div>
                         <p>
                         recruiterservices@shine.com
                        </p>
                    </div>
                </div>
                <div>
                    <div>Follow Us
                        <div style={{display:"flex"}}>
                        <a href="##" className={styles.in}></a>
                        <a href="##" className={styles.facebook}></a>
                        <a href="##" className={styles.twitter}></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.footerEnd}>
                <div className={styles.footerEndLeft}>
                    <div>Help Center</div>
                    <div>About Us</div>
                    <div>Contact Us</div>
                    <div>Terms & Conditions</div>
                </div>
                <div>
                © 2020 HT Media Limited
                </div>
            </div>
        </div>
    )
}

export { Footer }
