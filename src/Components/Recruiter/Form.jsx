import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { fetchRecruiters, loginRecruiter } from '../../Redux/RecruitRedux/action'
import styles from "./Recruiter.module.css"

export const Form = ({list}) => {

    const [email,setEmail]=useState("")
    const[lists,setList]=useState(list)
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const history=useHistory()
    const dispatch = useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData=lists.find(item=>item.email===email&&item.password===password)
        if(formData===undefined){  
           setError(true)
        }
        else{
            setError(false)
            dispatch(loginRecruiter())
            const location = {
                pathname: '/recruiter-profile',
                state: {formData}
              }
            history.push(location)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                    <div>
                        <input placeholder="Username" type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)}  required/>
                    </div>
                    <div>
                        <input placeholder="Password" type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)}required/>
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                        <NavLink className={styles.cls_openForgetPasswordDiv} to="/recruiter">Forgot Password</NavLink>
                    </div>
                    {
                        error &&
                        <div className={styles.error}>
                            Username and Password does not match
                        </div>
                    }
            </form>
        </>
    )
}
