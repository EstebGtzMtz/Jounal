import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const {displayName, email, photoURL, uid} = result.user;

    return {
      ok: true,
      email,
      displayName,
      photoURL,
      uid
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: 'error on login'
    }
  }
}

export const registerUserWithEmailAndPassword = async ({name, email, password}) => {
  try {
    const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const {uid, photoURL} = res.user;
    updateProfile(FirebaseAuth.currentUser,{ displayName: name });

    return {
      ok: true,
      email,
      displayName: name,
      photoURL: photoURL || '',
      uid
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: 'Error on register user'
    }
  }
}

export const loginWithEmailAndPassword = async ({email: userEmail, password}) => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, userEmail, password);
    const {displayName, email, photoURL, uid} = result.user;

    return {
      ok: true,
      email,
      displayName,
      photoURL: photoURL || '',
      uid
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: 'Error on login, check email and password'
    }
  }
}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
}