import authApi from "components/apis/authApi";
import { ActionTypes } from "Redux/constants/action-types";
/* 
const calculateRemainingTime = (expTime) => {
  const currentTime = new Date().getTime();
  const adjustExpTime = new Date(expTime).getTime();

  const remainingDuration = adjustExpTime - currentTime;

  return remainingDuration;
}; */

//login user
export const login = (email, password) => async (dispatch) => {
  const response = await authApi.post(
    "/accounts:signInWithPassword?key=AIzaSyBC5fucmRHul0eo35rCpQ4Ro1r_Fcg0fhk",
    {
      email: email,
      password: password,
    }
  );

  localStorage.setItem("token", response.data.idToken);

  /* const expTime = new Date() */

  dispatch({ type: ActionTypes.GET_TOKEN, payload: response.data.idToken });
};

//signup user
export const signup = (email, password) => async (dispatch) => {
  const response = await authApi.post(
    "/accounts:signUp?key=AIzaSyBC5fucmRHul0eo35rCpQ4Ro1r_Fcg0fhk",
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  localStorage.setItem("token", response.data.idToken);

  dispatch({ type: ActionTypes.GET_TOKEN, payload: response.data.idToken });
};

//get user data
export const getUserData = (token) => async (dispatch) => {
  const response = await authApi.post(
    "/accounts:lookup?key=AIzaSyBC5fucmRHul0eo35rCpQ4Ro1r_Fcg0fhk",
    {
      idToken: token,
    }
  );

  dispatch({ type: ActionTypes.SET_USER, payload: response.data.users });
};

//logout
export const logout = () => {
  localStorage.removeItem("token");
  return { type: ActionTypes.USER_LOGOUT };
};
