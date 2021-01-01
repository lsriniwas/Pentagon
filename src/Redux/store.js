import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { jobsReducer } from './JobsRedux/reducer';
import { reducer } from './RecruitRedux/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer=combineReducers({
    recruiter : reducer,
    job : jobsReducer
})

export const store=createStore(
    rootReducer,composeEnhancer(applyMiddleware(thunk))
);





