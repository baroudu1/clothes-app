import React from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignUpForm = React.lazy(() =>
  import("../../components/sign-up-form/sign-up-form.component")
);

const SignIn = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await getRedirectResult(auth);
  //     //   console.log(response);
  //     if (response) {
  //       if (response.user) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //         console.log(userDocRef);
  //       }
  //     }
  //     return;
  //   }
  //   fetchData();
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user)
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);

  // };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignUpForm />
    </div>
  );
};
export default SignIn;
