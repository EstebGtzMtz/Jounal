/* eslint-disable no-undef */
import { checkingCredentials } from "../../../src/store/auth/authSlice";
import { checkingAuthentication } from "../../../src/store/auth/authThunks";

jest.mock('../../../src/firebase/providers');

describe('Test on authThunks', () => {
  const dispatch = jest.fn();

  beforeEach(()=> jest.clearAllMocks());

  test('should invoke the checkingAuthentication/checkingCredentials()', async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});