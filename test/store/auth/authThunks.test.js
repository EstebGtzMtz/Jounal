/* eslint-disable no-undef */
import { registerUserWithEmailAndPassword, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn, startRegisterUserWithEmailAndPassword } from "../../../src/store/auth/authThunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('Test on authThunks', () => {
  const dispatch = jest.fn();

  beforeEach(()=> jest.clearAllMocks());

  test('should invoke the checkingAuthentication/checkingCredentials()', async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('should invoke the startGoogleSignIn/checkingCredentials() and login', async () => {
    const loginData = {ok: true, ...demoUser};
    await signInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('should invoke checkingCredential and Logout - Error', async () => {
    const loginData = {ok: false, errorMessage: 'Google error'};
    await signInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test('should invoke startRegisterUserWithEmailAndPassword/registerUserWithEmailAndPassword()', async () => {
    const loginData = {ok: true, ...demoUser};
    const signInFormData = {name: demoUser.displayName, email: demoUser.email, password: '123456'}
    await registerUserWithEmailAndPassword.mockResolvedValue(loginData)

    await startRegisterUserWithEmailAndPassword(signInFormData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  })
});