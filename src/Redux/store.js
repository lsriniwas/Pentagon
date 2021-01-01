import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { applicantReducer, jobReducer } from './RecruiterProfile/reducer';
import { reducer } from './RecruitRedux/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer=combineReducers({recruiter:reducer,jobReducer:jobReducer,applicantReducer:applicantReducer})
export const store=createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))




/**
 * {
      "id": 1,
      "name": "Sri",
      "contact": 100000000,
      "email": "xyz@gmail.com",
      "password": "123",
      "gender": "male",
      "qualification": "",
      "institute_name": "",
      "experienced": true,
      "year_0f_completion": 2019,
      "course_type": "full-time",
      "skills": "",
      "resume": "",
      "preferences": [],
      "location": "banglore",
      "dob": "02/02/1000",
      "profile_title": "",
      "profile_summary": "",
      "experience": "2yrs",
      "desired_job": "",
      "job_role": "",
      "job_location": "",
      "department": "",
      "industry": "",
      "job_type": "",
      "shift_type": "I am not interested in a Shift Based Job",
      "salary": 100000,
      "jobs_applied": [
        1
      ]
    }

 */
