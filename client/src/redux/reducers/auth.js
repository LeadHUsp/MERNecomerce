import axios from "axios";

const REGISTER_SECCESS = "REGISTER_SECCESS";
const REGISTER_FAIL = "REGISTER_FAIL";

const initialState = {
  token: localStorage.setItem("token", null),
  isAuth: null,
  loading: true,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SECCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false,
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token", null);
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
      };
    default:
      return state;
  }
};

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "COntent-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post("http://localhost:8080/api/user/register", body, config);
    dispatch({
      type: REGISTER_SECCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
export default authReducer;
