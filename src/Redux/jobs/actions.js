import { SEARCH_SUCCESS} from "./actionTypes"
import axios from "axios"

const searchSuccess = (payload) => {
    return {
        type: SEARCH_SUCCESS,
        payload: payload
    }
}



export const searchReq = (payload) => (dispatch) => {
    console.log("Initiating Search")
    const config = {
        method: 'get',  
        url: `https://pentagon-shine.herokuapp.com/jobs?q=${payload.query}`,
        headers: { 
          'Authorization': 'Basic Z28tY29yb25hLWFkbWluOjU1NzdZdnpVNGJLNjNhMVdJUTNaMDQzSA=='
        }
      };

    return axios(config).then((res)=>{
        console.log("result",res)
        dispatch(searchSuccess(res.data))
    })

        
}

