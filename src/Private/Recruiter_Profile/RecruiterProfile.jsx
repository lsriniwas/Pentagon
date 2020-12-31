import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutRecruiter } from '../../Redux/RecruitRedux/action'

const RecruiterProfile = () => {
    const history=useHistory()
    const[presentUser,setPresentuser]=useState(history.location.state)
    const dispatch = useDispatch()
    const handleLogout=()=>{
        dispatch(logoutRecruiter())
    }
    return (
        <div>
            Hello Recruiter Profile
            <button onClick={handleLogout}>Logout Button</button>
        </div>
    )
}

export {RecruiterProfile}
