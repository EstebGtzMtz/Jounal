/* eslint-disable no-undef */
import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Test on autSlice', () => {

  test('Should return the initial state and call "auth"', () => {
    expect(authSlice.name).toBe('auth');
    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState)
  });

  test('Should return user authentication state on login', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: 'authenticated',
      displayName: demoUser.displayName,
      uid: demoUser.uid,
      email: demoUser.email,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test('Should return the user logout state on logout', () => {
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined
    });
  });

  test('Should return the user logout state on logout and provide feedback error message ', () => {
    const state = authSlice.reducer(authenticatedState, logout('error on logout'));
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: 'error on logout'
    });
  });

  test('Should change status state to "checking"', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe('checking')
  });
});