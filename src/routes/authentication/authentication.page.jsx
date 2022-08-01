import React, { memo } from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import "./authentication.style.scss";

// import {
//   // auth,
//   signInWithGooglePopup,
//   // signInWithGoogleRedirect,
//   signInEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

const SignUpForm = React.lazy(() =>
  import("../../components/sign-up-form/sign-up-form.component")
);

const SignInForm = React.lazy(() =>
  import("../../components/sign-in-form/sign-in-form.component")
);

const Authentication = memo(() => {
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
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   // console.log(user)
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(userDocRef);
  // };
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);

  // };
  return (
    <div className="authentication-container">
      {/* <Button buttonType='google' onClick={logGoogleUser}>Sign in with Google</Button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
});
export default Authentication;
