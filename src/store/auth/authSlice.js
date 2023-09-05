import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking', // not-authenticated, authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredential: (state) => {}
  },
})

export const { login, logout, checkingCredential } = authSlice.actions;