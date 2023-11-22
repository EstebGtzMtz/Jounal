export const initialState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
}

export const authenticatedState = {
  status: 'authenticated',
  uid: 123456,
  email: 'test@mail.com',
  displayName: 'test',
  photoURL: 'https://profile.jpg',
  errorMessage: null
}

export const notAuthenticatedState = {
  status:'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: 'error on login',
}

export const demoUser = {
  uid: 123456,
  email: 'test@mail.com',
  displayName: 'test',
  photoURL: 'https://profile.jpg',
}