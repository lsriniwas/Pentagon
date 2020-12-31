import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllJobs } from '../../Redux/JobsRedux/actions'
import JobListingNavbar from './JobListingNavbar'
import PinnedSubheaderList from './List'

const JobListing = () => {
    const [value, setValue] = useState("")
    const jobs = useSelector(state => state.job.jobs)
    console.log(jobs)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllJobs(value))
    }, [dispatch])

    return (
        <div>
            <JobListingNavbar/>
            <PinnedSubheaderList data={jobs}/>

        </div>
    )
}

export default JobListing
