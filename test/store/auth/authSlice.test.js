/* eslint-disable no-undef */
import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe('Test on autSlice', () => {
  test('Should return the initial state and call "auth"', () => {
    expect(authSlice.name).toBe('auth');

    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState)
  })
});