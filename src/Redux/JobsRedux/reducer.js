import { FETCH_ALL_JOBS_FAILURE, FETCH_ALL_JOBS_REQUEST, FETCH_ALL_JOBS_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading : false,
    error : null,
    jobs : []
}

export const jobsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_ALL_JOBS_REQUEST:
        return { 
            ...state, 
            isLoading : true,
            error : null
        }
    case FETCH_ALL_JOBS_SUCCESS:
        return {
            ...state,
            jobs : payload,
            isLoading : false
        }
    case FETCH_ALL_JOBS_FAILURE:
        return {
            ...state,
            error : true,
            isLoading : false
        }
    default:
        return state
    }
}
