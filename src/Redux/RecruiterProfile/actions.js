import axios from "axios";
import { REQUEST_ALLPOSTED_JOBS, REQUEST_ALLPOSTED_JOBS_FAILURE, REQUEST_ALLPOSTED_JOBS_SUCCESS } from "./actionTypes";


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




const fetchAllPostedByUser=(payload)=>dispatch=>{
    dispatch(requestAllJobs)

    var config = {
        method: 'get',
        url: `https://pentagon-shine.herokuapp.com/jobs`,
        params:{
            recruiter_id:payload
        },
        headers: { },
        data : payload
      };
      
      return axios(config)
             .then(({data})=>{
                 console.log(data)
             })

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
      
}

export {postJob}
