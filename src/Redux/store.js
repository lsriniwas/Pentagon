import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { applicantReducer, jobReducer } from './RecruiterProfile/reducer';
import { reducer } from './RecruitRedux/reducer';
import { jobsReducer } from './JobsRedux/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer=combineReducers({recruiter:reducer,jobReducer:jobReducer,applicantReducer:applicantReducer,job : jobsReducer})
export const store=createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))








