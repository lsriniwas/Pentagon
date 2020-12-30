import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { reducer } from './RecruitRedux/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer=combineReducers({recruiter:reducer})
export const store=createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))





