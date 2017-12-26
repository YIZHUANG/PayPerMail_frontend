import axios from "axios";

import { FETCH_USER, SUBMIT_EMAIL, FETCH_EMAILS, DELETE_EMAILS } from "./types";

export const submitEmail = (values, history) => async dispatch => {
  const res = await axios.post("/api/emails", values);
  history.push("/Email");
  dispatch({
    type: FETCH_USER,
    payload: res
  });
};

export const fetchEmails = () => async dispatch => {
  const res = await axios.get("/api/emails");

  dispatch({
    type: FETCH_EMAILS,
    payload: res.data
  });
};

export const deleteEmails = (id, callback) => {
  const res = axios.delete("/api/emails/" + id).then(() => callback());

  return {
    type: DELETE_EMAILS,
    payload: res
  };
};
