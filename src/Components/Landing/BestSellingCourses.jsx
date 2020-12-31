import React from 'react'
import styles from '../../Styles/HomeMid.module.css';

const BestSellingCourses = () => {
    return (
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
    )
}

export default BestSellingCourses
