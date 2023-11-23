/* eslint-disable no-undef */
import { signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn } from "../../../src/store/auth/authThunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('Test on authThunks', () => {
  const dispatch = jest.fn();

  beforeEach(()=> jest.clearAllMocks());

  test('should invoke the checkingAuthentication/checkingCredentials()', async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('should invoke the startGoogleSignIn/checkingCredentials and login', async () => {
    const loginData = {ok: true, ...demoUser};
    await signInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });
});