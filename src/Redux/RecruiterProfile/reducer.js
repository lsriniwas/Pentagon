import { REQUEST_ALLPOSTED_JOBS, REQUEST_ALLPOSTED_JOBS_FAILURE, REQUEST_ALLPOSTED_JOBS_SUCCESS, REQUEST_APPLICANT_DETAILS, REQUEST_APPLICANT_DETAILS_FAILURE, REQUEST_APPLICANT_DETAILS_SUCCESS, REQUEST_POST_JOB_FAILURE } from "./actionTypes";

const initialState={
   allJobs:[],
   isLoading:false,
   error:true
}
const jobReducer=(state = initialState, { type, payload }) => {
    switch (type) {
    case REQUEST_ALLPOSTED_JOBS:
        return {
             ...state,
             loading:true    
            }
    case REQUEST_ALLPOSTED_JOBS_SUCCESS:
        return{
            ...state,
            allJobs:payload,
            isLoading:false
        }
    case REQUEST_ALLPOSTED_JOBS_FAILURE:
        return{
            ...state,
            error:true
        }
    default:
        return state
    }
}
export {jobReducer}


const init = {
    applicantDetails:"",
    isLoading:false,
    error:false
}

const applicantReducer= (state = init, { type, payload }) => {
    switch (type) { 
    case REQUEST_APPLICANT_DETAILS:
        return {
             ...state, 
            isLoading:true
             }
    case REQUEST_APPLICANT_DETAILS_SUCCESS:
        return {
                ...state, 
                applicantDetails:payload,
                isLoading:false
                }
    case REQUEST_POST_JOB_FAILURE:
        return{
            ...state,
            error:true
        }
    default:
        return state
    }
}
export {applicantReducer}

