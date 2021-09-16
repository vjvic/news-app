import authApi from "components/apis/authApi";
import { ActionTypes } from "Redux/constants/action-types";

//login user
export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await authApi.post(
      `/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        email: email,
        password: password,
      }
    );

    localStorage.setItem("token", data.idToken);

    dispatch({ type: ActionTypes.GET_TOKEN, payload: data.idToken });
  } catch (error) {
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: "Failed to login",
    });
  }
};

//signup user
export const signup = (email, password) => async (dispatch) => {
  try {
    const { data } = await authApi.post(
      `/accountss:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );

    localStorage.setItem("token", data.idToken);

    dispatch({ type: ActionTypes.GET_TOKEN, payload: data.idToken });
  } catch {
    dispatch({ type: ActionTypes.SET_ERROR, payload: "Failed to signup" });
  }
};

//get user data
export const getUserData = (token) => async (dispatch) => {
  dispatch({ type: ActionTypes.USER_LOADING });
  const { data } = await authApi.post(
    `/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    {
      idToken: token,
    }
  );

  dispatch({ type: ActionTypes.SET_USER, payload: data.users });
};

//logout
export const logout = () => {
  localStorage.removeItem("token");
  return { type: ActionTypes.USER_LOGOUT };
};
