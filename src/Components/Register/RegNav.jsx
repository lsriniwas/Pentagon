import React from 'react'
import styles from '../../Styles/Navbar.module.css';
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

const RegNav = () => {
    const history = useHistory()
    const handleHome=()=>{
        history.push(`/`)
    }
    return (
        <div className={styles.navbar_wrapper} style={{width:"100%"}}>
            <img onClick={handleHome} src={process.env.PUBLIC_URL + '/nav_logo.png'} alt="Logo" className={styles.logo} style={{marginLeft:"-1000px"}}/>
                   
        </div>
    )
}

export default RegNav

