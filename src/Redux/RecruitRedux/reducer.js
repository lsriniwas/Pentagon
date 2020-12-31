import { FETCH_RECRUITERS_LIST, FETCH_RECRUITERS_LIST_FAILURE, FETCH_RECRUITERS_LIST_SUCCESS, REQUEST_RECRUITER_ISAUTHLOGOUT, REQUEST_RECRUITER_ISAUTHSUCCESS, REQUEST_RECRUITER_POSTED_JOBS } from "./actionTypes";

const initialState={
    recruiterIsAuth:false,
    recruiterList:[],
    jobs:[],
    loading:false,
    error:false,
    error_msg:""
}
const reducer=(state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_RECRUITERS_LIST:
        return {
             ...state,
             loading:true    
            }
    case FETCH_RECRUITERS_LIST_SUCCESS:
        return{
            ...state,
            recruiterList:payload,
            loading:false
        }
    case FETCH_RECRUITERS_LIST_FAILURE:
        return{
            ...state,
            error:true,
            error_msg:payload
        }
    case REQUEST_RECRUITER_ISAUTHSUCCESS:
        return{
            ...state,
            recruiterIsAuth:true,
        }
    case REQUEST_RECRUITER_ISAUTHLOGOUT:
        return{
            ...state,
            recruiterIsAuth:false
        }
    case REQUEST_RECRUITER_POSTED_JOBS:
        return{
            ...state,
            jobs:payload
        }
    default:
        return state
    }
}

export {reducer}
