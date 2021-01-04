import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE,LOGOUT,APPLY_JOB } from "./actionTypes"
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
const registerRequest = () => {
    return {
        type: REGISTER_REQUEST,
        
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

export const Loginreq = (email, pass) => (dispatch) => {
    dispatch(loginRequest(email, pass))
    const config = {
        method: 'get',  
        url: `https://pentagon-shine.herokuapp.com/users?email=${email}&password=${pass}`,
        headers: { 
          'Authorization': 'Basic Z28tY29yb25hLWFkbWluOjU1NzdZdnpVNGJLNjNhMVdJUTNaMDQzSA=='
        }
      };

    return axios(config).then((res)=>{
        dispatch(loginSuccess(res.data[0]))
    }).catch((err) => {
            dispatch(loginFailure(err))
        })

        
}

export const Regreq = (payload) => (dispatch) => {
    
    dispatch(registerRequest())
    const config = {
        method: 'post',
        url: 'https://pentagon-shine.herokuapp.com/users',
        data: payload
    }
console.log("1231",payload)
    return axios(config).then((res) => {
        dispatch(registerSuccess(res.data))
    }).catch((err) => {
        dispatch(registerFailure(err))
    })
        
}

export const apply_job = (payload,id) => (dispatch) => {
    
    dispatch(registerRequest())
    const config = {
        method: 'patch',
        url: `https://pentagon-shine.herokuapp.com/users/${id}`,
        data: payload
    }
console.log("1231",payload)
    return axios(config).then((res) => {
        axios(`https://pentagon-shine.herokuapp.com/users/${id}`).then(
            (res)=>{console.log(res.data)
                dispatch(loginSuccess(res.data))
            })
    }).catch((err) => {
        console.log("error")
        // dispatch(registerFailure(err))
    })
        
}