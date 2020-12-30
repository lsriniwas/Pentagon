import React from 'react'
import styles from '../../Styles/HomeMid.module.css';
import SearchIcon from '@material-ui/icons/Search';
import CenteredTabs from './Tabs';

const LandingPageContent = () => {
    return (
        <div>
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

            {/* Cool places to work start */}

            <section className={styles.cool_work}>
                <h1>Cool places to work</h1>
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/fujitsu_big.png'} alt="" className={styles.cool_work_image} />
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/fujitsu.png'} alt="" className={styles.cool_work_image_title} />
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/infosys_big.png'} alt="" className={styles.cool_work_image} />
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/infosys.png'} alt="" className={styles.cool_work_image_title} />
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/genpact_big.png'} alt="" className={styles.cool_work_image} />
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/genpact.png'} alt="" className={styles.cool_work_image_title} />
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/ibm_big.png'} alt="" className={styles.cool_work_image} />
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/ibm.png'} alt="" className={styles.cool_work_image_title} />
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/insur.png'} alt="" className={styles.cool_work_image} />
                        <img src={process.env.PUBLIC_URL + '/shine_images/cool_work_places/insur_big.png'} alt="" className={styles.cool_work_image_title} />
                    </div>
                </div>
            </section>

            {/* Cool places to work end */}

            {/* Top companies hiring start */}

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

            {/* Top companies hiring end */}

            {/* Why shine start */}

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

            {/* Why shine end */}

            {/* Shine premium start */}

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

            {/* Shine premium end */}

            {/* Job Alerts start */}

            <section className={styles.job_alert}>
                <h2>Get instant job alerts from top companies</h2>
                <p>Be the first one to apply to jobs</p>
                <div className={styles.job_alert_content}>
                    <img src={process.env.PUBLIC_URL + '/shine_images/app_base.png'} alt=""/>
                    <div className={styles.job_alert_content_right}>
                        <div className={styles.mobile_alert}>
                            <div>91 <span>Mobile</span></div>
                            <button>Get App</button>
                        </div>
                        <div>
                            <div className={styles.rating}>
                                <p>Rated</p>
                                <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                                <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                                <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                                <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                                <span><img src={process.env.PUBLIC_URL + '/shine_images/star.png'} alt=""/></span>
                                <p>|</p>
                                <strong>10 million</strong>
                                <p>downloads</p>
                            </div>
                        </div>
                        <div className={styles.store_button}>
                            <button> <img src={process.env.PUBLIC_URL + '/shine_images/playstore.png'} alt=""/> <span>Google Play</span></button>
                            <button> <img src={process.env.PUBLIC_URL + '/shine_images/appstore.png'} alt=""/> App Store</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Alerts end */}

            {/* Resume Helper start */}

            <section className={styles.resume}>
                <h2>Having trouble writing your resume?</h2>
                <div>
                    <div>
                        <div className={styles.resume_white_box}>
                            <div>
                                <strong>Resume writing</strong>
                                <p>Highlight right skills on resume to get noticed by recruiters and hired faster</p>
                                <button className={styles.resume_button}>Get expert help</button>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/shine_images/r_writing.png'} alt=""/>
                        </div>
                        <div className={styles.resume_white_box}>
                            <div>
                                <strong>Resume Builder</strong>
                                <p>Build impressive resume instantly with ready to use templates</p>
                                <button className={styles.resume_button}>Build your resume</button>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/shine_images/r_builder.png'} alt=""/>
                        </div>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/resume_writing.png'} alt=""/>
                    </div>
                </div>
            </section>

            {/* Resume Helper end */}

            {/* Shine learning start */}

            <section className={styles.shine_learning}>
                <div>
                    <img src={process.env.PUBLIC_URL + '/shine_images/s-learning.png'} alt=""/>
                    <h2>Want to make your career future ready?</h2>
                    <h3>Upgrade your skills, give your career a boost</h3>
                    <div>Explore courses</div>
                </div>
            </section>

            {/* Shine learning end */}

            {/* Best selling courses start */}

            <section className={styles.best_courses}>
                <h2>Our best selling Courses</h2>
                <div className={styles.courses_content}>
                    <div>
                        <div>
                            <h3>Microsoft Excel for Data Analyst</h3>
                            <p>82 people bought</p>
                            <p><strong>38718</strong> jobs available</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/courses/excel.png'} alt=""/>
                    </div>
                    <div>
                        <div>
                            <h3>Data Science & Machine Learning with Python</h3>
                            <p>55 people bought</p>
                            <p><strong>38801</strong> jobs available</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/courses/data_science.png'} alt=""/>
                    </div>
                    <div>
                        <div>
                            <h3>AWS Architect Certification Training</h3>
                            <p>82 people bought</p>
                            <p><strong>38718</strong> jobs available</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/courses/aws.png'} alt=""/>
                    </div>
                    <div>
                        <div>
                            <h3>GST Practitioner Certification Course</h3>
                            <p>82 people bought</p>
                            <p><strong>38718</strong> jobs available</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/courses/gst.png'} alt=""/>
                    </div>
                    <div>
                        <div>
                            <h3>AI & Deep Learning with Tensor Flow</h3>
                            <p>82 people bought</p>
                            <p><strong>38718</strong> jobs available</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/courses/data_science.png'} alt=""/>
                    </div>
                    <div>
                        <div>
                            <h3>Learn Six Sigma Expert Combo(GB + BB)</h3>
                            <p>82 people bought</p>
                            <p><strong>38718</strong> jobs available</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/shine_images/courses/66.png'} alt=""/>
                    </div>
                </div>
            </section>

            {/* Best selling courses end */}

            {/* Browse Jobs Start */}

            <section className={styles.browse_jobs}>
                <h2>Browse Jobs</h2>
                <div>
                    <CenteredTabs/>
                </div>
                <div className={styles.job_list}>
                    <div>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                    </div>
                    <div>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                    </div>
                    <div>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                        <p>IT-Software Jobs <span>(45551)</span></p>
                        <p>Recruitment Services Jobs <span>(45551)</span></p>
                    </div>
                </div>
                <button>Job by industries</button>
            </section>

            {/* Browse Jobs End */}

            {/* Recruit smart start */}

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

            {/* Recruit smart end */}

            {/* Advt banner start */}

            <section>
                <img src={process.env.PUBLIC_URL + '/shine_images/advt.png'} alt="banner" />
                 {/* <img src={process.env.PUBLIC_URL + '/shine_images/thumbsup.png'} alt="banner" /> */}
            </section>

            {/* Advt banner end */}

            {/* Footer Start */}

            <section className={styles.footer}>

            </section>

            {/* Footer End */}
        </div>
    )
}

export default LandingPageContent
