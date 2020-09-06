import {
  AuthApi
} from "../../dataAccessLayer";

//Types
export const REGISTER_USER_START = "REGISTER_USER_START";
const REGISTER_SECCESS = "REGISTER_SECCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SECCESS = "LOGIN_SECCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
const USER_LOADED = "USER_LOADED";
const LOGOUT = "LOGOUT";
const AUTH_ERROR = "AUTH_ERROR";
const SHOW_LOGIN_FORM = "SHOW_LOGIN_FORM";
const HIDE_LOGIN_FORM = "HIDE_LOGIN_FORM";

//Initial state
const initialState = {
  token: null,
  isAuth: null,
  loading: true,
  user: null,
  showLoginForm: false,
};

//auth reducer

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
          isAuth: true,
          loading: false,
      };
    case REGISTER_SECCESS:
    case REGISTER_USER_START:
    case LOGIN_SECCESS:
    case LOGIN_START:
      return {
        ...state,
        ...action.payload,
          isAuth: true,
          loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
          loading: false,
      };
    case SHOW_LOGIN_FORM:
      return {
        ...state,
        showLoginForm: true,
      };
    case HIDE_LOGIN_FORM:
      return {
        ...state,
        showLoginForm: false,
      };
    default:
      return state;
  }
};

//actions
export const setLogOut = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
  };
};
export const loginStart = (payload) => {
  return {
    type: LOGIN_START,
    payload,
  };
};
export const logInUser = (payload) => {
  return {
    type: LOGIN_SECCESS,
    payload,
  };
};
export const registerUserStart = (payload) => {
  return {
    type: REGISTER_USER_START,
    payload,
  }
}

export const registerFail = () => {
  localStorage.removeItem("token");
  return {
    type: REGISTER_FAIL,
  };
};
export const setShowLoginForm = () => {
  return {
    type: SHOW_LOGIN_FORM,
  };
};
export const setHideLoginForm = () => {
  return {
    type: HIDE_LOGIN_FORM,
  };
};

//thunk


export const loadUser = () => async (dispatch) => {
  try {
    const res = await AuthApi.getUserData(localStorage.token);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export default authReducer;