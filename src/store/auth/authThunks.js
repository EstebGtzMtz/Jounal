import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
  return async dispatch => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
  return async dispatch => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if(!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result))
  }
}

export const startRegisterUserWithEmailAndPassword = ({name, email, password}) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailAndPassword({name, email, password});
    if(!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))
  }
}

export const startLoginWithEmailAndPassword = ({email, password}) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailAndPassword({email, password});
    if(!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  }
}

export const startLogout = () => {
  return async dispatch => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout());
  }
}