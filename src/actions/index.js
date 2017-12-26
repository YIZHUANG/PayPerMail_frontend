import axios from "axios";
import { BrowserRouter, Route, Router, Link } from "react-router-dom";
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOG_OUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  FETCH_USER,
  SIGNUP_FAIL
} from "./types";

const ROOT_URL = "https://userauthhhhh.herokuapp.com";
const API_KEY = "?key=ZHUANGPOST";

export const usernameChanged = text => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ username, password }) => {
  return dispatch => {
    axios
      .post(`/api/signIn`, { username, password })
      .then(() => loginSucess(dispatch))
      .catch(() => loginFail(dispatch));
  };
};

const loginSucess = dispatch => {
  dispatch({
    type: LOGIN_SUCCESS
  });
};

const loginFail = dispatch => {
  dispatch({
    type: LOGIN_FAIL
  });
};

export const signUpUser = ({ username, password }) => {
  return dispatch => {
    axios
      .post(`/api/signUp`, { username, password })
      .then(res => {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data
        });
      })
      .catch(res => {
        dispatch({
          type: SIGNUP_FAIL,
          payload: res.data
        });
      });
  };
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`/api/current_user`);
  dispatch({
    type: FETCH_USER,
    payload: res
  });
};

export const handleStripeToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({
    type: FETCH_USER,
    payload: res
  });
};

export const logout = history => async dispatch => {
  const res = await axios.get(`/api/logout`);
  dispatch({
    type: LOG_OUT,
    payload: res //reset the input value for the form in the reducer.
  });
  history.push("/");
};
