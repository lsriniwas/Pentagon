import React from 'react'
import styles from '../../Styles/HomeMid.module.css';

const CoolWorkPlaces = () => {
    return (
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
    )
}

export default CoolWorkPlaces
