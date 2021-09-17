import { capitalize } from "@material-ui/core";

//add token to localstorage
export const setToken = (token) => {
  return localStorage.setItem("token", token);
};

//remove token from localstorage
export const removeToken = () => {
  return localStorage.removeItem("token");
};

export const arrangeText = (text) => {
  return capitalize(text.replace(/_/g, " ").toLowerCase());
};
