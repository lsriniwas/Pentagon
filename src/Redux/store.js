import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer=combineReducers({})

export const store=createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))



