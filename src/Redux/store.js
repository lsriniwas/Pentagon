import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { authReducer } from "./reducer"

const thunk = ({ getState, dispatch }) => (next)=>(action)=>{
    if (typeof action === 'function') {
        return action(dispatch, getState)
    }
    return next(action)
}


const createComposer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(
    authReducer,
    createComposer(applyMiddleware(thunk))
)

console.log(store.getState())

store.subscribe(() => console.log(store))