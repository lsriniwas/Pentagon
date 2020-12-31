import React from 'react'
import styles from "./Recruiter.module.css"

const HRinsider = () => {
    return (
       
        <div className={styles.hrinsider}>
            <div className={styles.hrinsiderCont}>
                <div className={styles.heading}>
                    HR Insider
            </div>
                <div className={styles.hrinsiderCard}>
                    <div className={styles.hrinsiderCardData}>
                      
                        <a href="##" >
                            <img alt="hr insider" src={process.env.PUBLIC_URL + 'hrinsider1.jpg'} />
                        </a>
                        
                            <h3>
                              How Digital Transformation Will Transform Human Resources
                            </h3>
                                <p>
                                Watch the highlights of the ‘50th Shine HR Conclave’ where top HR minds discussed the impact of Artificial Intelligence in HR.
                                </p>
                    </div>
                    <div className={styles.hrinsiderCardData}>
                        <a href="##" >
                            <img alt="hr insider" src={process.env.PUBLIC_URL + 'hrinsider2.jpg'} />
                        </a>
                        
                            <h3>
                            Man-Machine Collaboration through AI-50th Shine HR Conclave, Mumbai.
                            </h3>
                                <p>
                                    The functioning of the HR department has been largely underestimated for a long time, which is extremely unfair - especially when one takes a look at the sheer amount of internal work that the department has to perform.
                                </p>
                    </div>
                    <div className={styles.hrinsiderCardData}>
                        <a href="##" >
                            <img alt="hr insider" src={process.env.PUBLIC_URL + 'hrinsider3.jpg'} />
                        </a>
                        
                            <h3>
                            Creating Positive Candidate Experience To Retain And Attract Best Talent
                            </h3>
                                <p>
                                Talent acquisition has undergone a significant transformation in the last five years. With 76% of the online population now on social media, it has never been easier to find and source candidates online.  
                                </p>
                    </div>
                </div>
            </div>
            <div className={`${styles.alignCenter}`}>
            <a className={`${styles.ownPlanLink}`}  href="/">More HR trends and insights </a>
            </div>
        </div>
    )
}

export { HRinsider }
