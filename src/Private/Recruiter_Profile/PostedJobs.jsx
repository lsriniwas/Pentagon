import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchAllPostedByUser } from '../../Redux/RecruiterProfile/actions'

export const PostedJobs = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const[presentUser,setPresentuser]=useState(history.location.state)

    React.useEffect(() => {
        dispatch(fetchAllPostedByUser(presentUser.formData.id))
    }, [])

    return (
        <div>
            PostedJobs
        </div>
    )
}
