import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE,LOGOUT } from "./actionTypes"
import axios from "axios"
const loginRequest = (uname, pass) => {
    return {
        type: LOGIN_REQUEST,
        payload: {
            username: uname,
            password: pass
        }
    }
}
const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}
const registerRequest = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload:payload
    }
}
const registerSuccess = (status) => {
    return {
        type: REGISTER_SUCCESS,
        payload: status
    }
}

const registerFailure = (error) => {
    return {
        type: REGISTER_FAILURE,
        payload: error
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const Loginreq = (uname, pass) => (dispatch) => {
    console.log("Initiating Login")
    dispatch(loginRequest(uname, pass))
    const config = {
        method: 'get',  
        url: `http://localhost:3004/users?email=${uname}&password=${pass}`,
        headers: { 
          'Authorization': 'Basic Z28tY29yb25hLWFkbWluOjU1NzdZdnpVNGJLNjNhMVdJUTNaMDQzSA=='
        }
      };

    return axios(config).then((res)=>{
        console.log("logged in",res)
        dispatch(loginSuccess(res.data))
    }).catch((err) => {
            console.log("error",err)
            dispatch(loginFailure(err))
        })

        
}

export const Regreq = (payload) => (dispatch) => {
    dispatch(registerRequest(payload))
    const config = {
        method: 'post',
        url: 'http://localhost:3004/users',
        data: payload
    }

    return axios(config).then((res) => {
        console.log("1",res)
        console.log("2",res.data.message)
        dispatch(registerSuccess(res.data.message))
    })
        .catch((err) => {
            dispatch(registerFailure(err))
        })
}