import axios from "axios";
import { FETCH_ALL_JOBS_FAILURE, FETCH_ALL_JOBS_REQUEST, FETCH_ALL_JOBS_SUCCESS,SEARCH_SUCCESS ,INCOMING_APPLICATION} from "./actionTypes";

const fetchAllJobsRequest = () => ({
    type: FETCH_ALL_JOBS_REQUEST
})

const fetchAllJobsSuccess = (payload) => ({
    type: FETCH_ALL_JOBS_SUCCESS,
    payload
})

const fetchAllJobsFailure = (error) => ({
    type: FETCH_ALL_JOBS_FAILURE,
    payload : error
})



export const fetchAllJobs = (query="") => dispatch => {
    dispatch(fetchAllJobsRequest())
    const config = {
        method: 'get',
        url: 'https://pentagon-shine.herokuapp.com/jobs',
        params : {
            q : query
        }
    }
    return axios(config)
        .then((res) => {
            dispatch(fetchAllJobsSuccess(res.data))
        }).catch((err) => {
            dispatch(fetchAllJobsFailure(err))
        });
}

export const searchReq = (payload) => (dispatch) => {
    const config = {
        method: 'get',  
        url: `https://pentagon-shine.herokuapp.com/jobs?q=${payload.query}`,
        headers: { 
          'Authorization': 'Basic Z28tY29yb25hLWFkbWluOjU1NzdZdnpVNGJLNjNhMVdJUTNaMDQzSA=='
        }
      };

    return axios(config).then((res)=>{
        dispatch(fetchAllJobsSuccess(res.data))
    })        
}

export const job_apply = (payload,id) => dispatch => {
    const config = {
        method: 'PATCH',
        url: `https://pentagon-shine.herokuapp.com/jobs/${id}`,
        data:payload
    }
    return axios(config)
        .then((res) => {
            // dispatch(fetchAllJobsSuccess(res.data))
        }).catch((err) => {
            // dispatch(fetchAllJobsFailure(err))
        });
}
