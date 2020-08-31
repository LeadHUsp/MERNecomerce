import { AuthApi } from "../../dataAccessLayer";

//Types
const REGISTER_SECCESS = "REGISTER_SECCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
const USER_LOADED = "USER_LOADED";
const AUTH_ERROR = "AUTH_ERROR";

//Initial state
const initialState = {
  token: null,
  isAuth: null,
  loading: true,
  user: null,
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
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      return {
        ...state,
        isAuth: false,
        loading: false,
      };
    default:
      return state;
  }
};

//actions

export const registerUser = (payload) => {
  localStorage.setItem("token", payload.token);
  return {
    type: REGISTER_SECCESS,
    payload,
  };
};
export const registerFail = () => {
  localStorage.removeItem("token");
  return {
    type: REGISTER_FAIL,
  };
};

//thunk
export const register = ({ name, email, password }) => async (dispatch) => {
  try {
    const res = await AuthApi.register(name, email, password);
    dispatch(registerUser(res.data));
  } catch (error) {
    console.log(error);
    dispatch(registerFail());
  }
};
export const loadUser = () => async (dispatch) => {
  try {
    const res = await AuthApi.getUserData(localStorage.token);
    console.log(res);
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
