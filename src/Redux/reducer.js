import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE,LOGOUT } from "./actionTypes"

const initState = {
    isAuth: false,
    userdata: "",
    error: null,
    status:""
}

export const authReducer = (state = initState, { type,payload }) => {
    switch (type) {

        case LOGIN_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case LOGIN_SUCCESS: {
            console.log(payload)
            return {
                isAuth: true,
                userdata: payload,
                error: null
            }
        }

        case LOGIN_FAILURE: {
            return {
                isAuth: false,
                userdata: null,
                error: true
            }
        }
        case REGISTER_REQUEST: {
            return {
                ...state,
                isAuth:false,
                loading: true,
                error: null
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                isAuth:true,
                status:payload,
                error: null
            }
        }

        case REGISTER_FAILURE: {
            return {
                ...state,
                status:payload,
                error: true
            }
        }

        case LOGOUT: {
            return {
                ...state,
                isAuth:false
            }
        }



        default: return state
    }

}