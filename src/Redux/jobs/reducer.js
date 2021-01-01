import { SEARCH_SUCCESS } from "./actionTypes"

const initState = {
    data:""
}

export const jobsReducer = (state = initState, { type,payload }) => {
    switch (type) {

        case SEARCH_SUCCESS: {
            console.log(payload)
            return {
                
                data: [...payload]
                
            }
        }

        
        default: return state
    }

}