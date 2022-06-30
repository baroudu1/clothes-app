import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCggTmutuzsW-1HGBvbgTD74M-jemz78aA",
  authDomain: "clothes-app-db.firebaseapp.com",
  projectId: "clothes-app-db",
  storageBucket: "clothes-app-db.appspot.com",
  messagingSenderId: "874462017343",
  appId: "1:874462017343:web:1d991baf49ae667283058a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userDocSnapshot = await getDoc(userDocRef);
  // console.log(userDocSnapshot.exists());

  if (!userDocSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    // console.log(displayName, email, createdAt);
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error("Error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
  return await signOut(auth);
}

export const onAuthStateChangedListner =  (callback) => {
  return  onAuthStateChanged(auth, callback);
}



