import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOG_OUT,
  FETCH_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  username: "",
  password: "",
  status: null,
  user: false,
  loginError: "",
  signUpMessage:"",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOG_OUT:
      return INITIAL_STATE;
    case LOGIN_SUCCESS:
      return { username: "", password: "", status: true , loginError:"", signUpMessage: ""};
    case LOGIN_FAIL:
      return {
        loginError:
          "Log in fail, check your if your username or password is correct"
      };
    case FETCH_USER:
      return { ...state, user: action.payload.data || false }; //has  to be data.
    case SIGNUP_SUCCESS:
      return {
        username: "",
        password: "",
        user: false,
        status: null,
        signUpMessage: action.payload
      };
    case SIGNUP_FAIL:
      return { ...state, signUpMessage: action.payload };
    default:
      return state;
  }
};
