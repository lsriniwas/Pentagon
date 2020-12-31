import React from 'react'
import styles from '../../Styles/Navbar.module.css';
import { Link } from "react-router-dom"

const RegNav = () => {
    return (
        <div className={styles.navbar_wrapper}>
            <img src={process.env.PUBLIC_URL + '/nav_logo.png'} alt="Logo" className={styles.logo}/>
            <button><Link to={'/login'}>Login</Link></button>            
        </div>
    )
}

export default RegNav

