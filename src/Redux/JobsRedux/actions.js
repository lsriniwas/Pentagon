import axios from "axios";
import { FETCH_ALL_JOBS_FAILURE, FETCH_ALL_JOBS_REQUEST, FETCH_ALL_JOBS_SUCCESS } from "./actionTypes";

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
