import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Recruiter.module.css"
export const Form = () => {
    return (
        <>
            <form onSubmit={{}}>
                    <div>
                        <input placeholder="Username" type="text" name="email"  required/>
                    </div>
                    <div>
                        <input placeholder="Password" type="password" name="password"  required/>
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                        <NavLink className={styles.cls_openForgetPasswordDiv} to="/recruiter" aria-disabled>Forgot Password</NavLink>
                    </div>
            </form>
        </>
    )
}
