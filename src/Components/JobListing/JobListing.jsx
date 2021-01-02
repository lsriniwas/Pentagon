import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllJobs } from '../../Redux/JobsRedux/actions'
import JobListingNavbar from './JobListingNavbar'
import JobSearch from './JobSearch'
import JobListingContent from './List'

const JobListing = () => {
    const [value, setValue] = useState("")
    const jobs = useSelector(state => state.job.jobs)
    const data = useSelector((state) => state.auth.userdata)
    jobs.sort((a,b)=>b.id-a.id)
    console.log(jobs)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(fetchAllJobs(value))
    }

    useEffect(() => {
        dispatch(fetchAllJobs(value))
    }, [dispatch])

    return (
        <div>
            <JobListingNavbar
            name={data.name}/>
            <JobSearch value={value} setValue={setValue} handleSubmit={handleSubmit}/>
            <JobListingContent data={jobs}/>
        </div>
    )
}

export default JobListing
