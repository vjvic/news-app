import authApi from "components/apis/authApi";
import { ActionTypes } from "Redux/constants/action-types";

//login user
export const login = (email, password) => async (dispatch) => {
  const response = await authApi.post(
    `/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    {
      email: email,
      password: password,
    }
  );

  localStorage.setItem("token", response.data.idToken);

  dispatch({ type: ActionTypes.GET_TOKEN, payload: response.data.idToken });
};

//signup user
export const signup = (email, password) => async (dispatch) => {
  const response = await authApi.post(
    `/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
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
    `/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
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
