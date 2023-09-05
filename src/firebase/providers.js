import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
    console.log(error)
    return {
      ok: false,
      message: 'error on login'
    }
  }
}