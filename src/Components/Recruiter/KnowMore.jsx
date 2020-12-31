import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Recruiter.module.css"

 const KnowMore = () => {
    return (
        <>
            <NavLink className={styles.knowmore} to="/">Know More</NavLink>
        </>
    )
}
export {KnowMore}