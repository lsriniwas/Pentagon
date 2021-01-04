import axios from "axios";
import { REQUEST_ALLPOSTED_JOBS, REQUEST_ALLPOSTED_JOBS_FAILURE, REQUEST_ALLPOSTED_JOBS_SUCCESS, REQUEST_APPLICANT_DETAILS, REQUEST_APPLICANT_DETAILS_FAILURE, REQUEST_APPLICANT_DETAILS_SUCCESS } from "./actionTypes";


const requestAllJobs=()=>({
    type:REQUEST_ALLPOSTED_JOBS
})

const requestAllJobsSuccess=(payload)=>({
    type:REQUEST_ALLPOSTED_JOBS_SUCCESS,
    payload
})
const requestAllJobsFailure=(err)=>({
    type:REQUEST_ALLPOSTED_JOBS_FAILURE,
    payload:err
})
const fetchAllPostedByUser=(id)=>dispatch=>{
    dispatch(requestAllJobs)
    var config = {
        method: 'get',
        url: `https://pentagon-shine.herokuapp.com/jobs`,
        params:{
            recruiter_id:id
        },
        headers: { },
        data : id
      };
      return axios(config)
             .then(({data})=>{
                 dispatch(requestAllJobsSuccess(data))
             })
             .catch(err=>{
                dispatch(requestAllJobsFailure(err))})

}
export {fetchAllPostedByUser}




const requestPostJob=()=>({
    type:REQUEST_ALLPOSTED_JOBS
})
const requestPostJobSuccess=(payload)=>({
    type:REQUEST_ALLPOSTED_JOBS_SUCCESS,
    payload
})
const requestPostJobFailure=(err)=>({
    type:REQUEST_ALLPOSTED_JOBS_FAILURE,
    payload:err
})
const postJob=payload=>dispatch=>{
    dispatch(requestPostJob())
    var config = {
        method: 'post',
        url: 'https://pentagon-shine.herokuapp.com/jobs',
        headers: { },
        data : payload
      };
      return axios(config)
             .then(res=>{
                dispatch(fetchAllPostedByUser(res.data.recruiter_id)) 
                dispatch(requestPostJobSuccess(res.data))}
                 )
             .catch(err=>dispatch(requestPostJobFailure(err)))
      
}
export {postJob}




const requestApplicantDetails=()=>({
    type:REQUEST_APPLICANT_DETAILS,
})
const requestApplicantDetailsSuccess=(payload)=>({
    type:REQUEST_APPLICANT_DETAILS_SUCCESS,
    payload
})
const requestApplicantDetailsFailure=(err)=>({
    type:REQUEST_APPLICANT_DETAILS_FAILURE,
    payload:err
})
const applicantDetails=(id)=>dispatch=>{
    dispatch(requestApplicantDetails())
    var config = {
        method: 'get',
        url: `https://pentagon-shine.herokuapp.com/users?id=${id}`,
        headers: { },
        data : id
      };

  return axios(config)
         .then(({data})=>{
             dispatch(requestApplicantDetailsSuccess(data))
         })
         .catch(err=>{
            dispatch(requestApplicantDetailsFailure(err))
         })
         
         
}
export {applicantDetails}



