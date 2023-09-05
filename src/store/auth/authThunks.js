import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = (email, password) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    console.log({email,password}, 'thunk')
  }
}

export const startGoogleSignIn = () => {
  return async dispatch => {
    dispatch(checkingCredentials())
  }
}