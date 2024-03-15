import axios from "axios";

// Redux types
import { SIGN_OUT, SIGN_IN, SIGN_UP, GOOGLE_AUTH } from "./auth.type";

// Redux actions
import { clearUser } from "../User/user.action";

// Action creator for user sign in
export const signIn = (userData) => async (dispatch) => {
  try {
    // Make API call to sign in user
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/auth/signin`,
      data: { credentials: userData },
    });

    // Store user token in local storage
    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    // Reload the page after successful sign in
    window.location.reload();

    // Dispatch action to update Redux store with user data
    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    // Dispatch action in case of error
    return dispatch({ type: "ERROR", payload: error });
  }
};

// Action creator for user sign up
export const signUp = (userData) => async (dispatch) => {
  try {
    // Make API call to sign up user
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/auth/signup`,
      data: { credentials: userData },
    });

    // Store user token in local storage
    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    // Reload the page after successful sign up
    window.location.reload();

    // Dispatch action to update Redux store with user data
    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    // Dispatch action in case of error
    return dispatch({ type: "ERROR", payload: error });
  }
};

// Action creator for user sign out
export const signOut = () => async (dispatch) => {
  try {
    // Remove user token from local storage
    localStorage.removeItem("zomatoUser");

    // Clear user data from Redux store
    clearUser();

    // Redirect to delivery page after sign out
    window.location.href = "http://localhost:3000/delivery";

    // Dispatch action to update Redux store
    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    // Dispatch action in case of error
    return dispatch({ type: "ERROR", payload: error });
  }
};

// Action creator for Google authentication
export const googleAuth = (token) => async (dispatch) => {
  try {
    // Store user token in local storage
    localStorage.setItem("zomatoUser", JSON.stringify({ token }));

    // Dispatch action to update Redux store
    return dispatch({ type: GOOGLE_AUTH, payload: {} });
  } catch (error) {
    // Dispatch action in case of error
    return dispatch({ type: "ERROR", payload: error });
  }
};
