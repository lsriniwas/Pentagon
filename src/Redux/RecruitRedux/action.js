import axios from "axios";
import {
  REQUEST_RECRUITER_ISAUTHLOGOUT,
  FETCH_RECRUITERS_LIST,
  FETCH_RECRUITERS_LIST_FAILURE,
  FETCH_RECRUITERS_LIST_SUCCESS,
  REQUEST_RECRUITER_ISAUTHSUCCESS,
  REQUEST_RECRUITER_POSTED_JOBS,
} from "./actionTypes";



let i=0;
const fetchRecruiterList = () => ({
  type: FETCH_RECRUITERS_LIST,
});
const fetchRecruiterListSuccess = (payload) => ({
  type: FETCH_RECRUITERS_LIST_SUCCESS,
  payload,
});
const fetchRecruiterListFailure = (err) => ({
  type: FETCH_RECRUITERS_LIST_FAILURE,
  payload: err,
});
const recruiterIsAuth = () => ({
  type: REQUEST_RECRUITER_ISAUTHSUCCESS,
});


 const fetchRecruiters  = () => (dispatch) => {
  dispatch(fetchRecruiterList());
  var config = {
    method: "get",
    url: "https://pentagon-shine.herokuapp.com/recruiters",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config)
    .then(({ data }) => {
      console.log("Data",data)
      dispatch(fetchRecruiterListSuccess(data))})
    .catch((err) => {
      dispatch(fetchRecruiterListFailure(err));
    });
};
export { fetchRecruiters };   

const addRecruiter = (payload) => (dispatch) => {
  dispatch(fetchRecruiterList());
  var config = {
    method: "post",
    url: "https://pentagon-shine.herokuapp.com/recruiters",
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };
  return axios(config)
    .then(() => dispatch(fetchRecruiters()))
    .catch((err) => {
      dispatch(fetchRecruiterListFailure(err));
    });
};
export { addRecruiter };


const loginRecruiter = (payload) => (dispatch) => {
  dispatch(recruiterIsAuth());
  dispatch(fetchRecruiters());
};
export { loginRecruiter };



const logoutRecruiter = () => ({
  type: REQUEST_RECRUITER_ISAUTHLOGOUT,
});
export { logoutRecruiter };


