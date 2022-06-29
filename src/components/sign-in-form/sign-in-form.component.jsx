import React, { useState } from "react";

import "./sign-in-form.style.scss";

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  signInEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const FormInput = React.lazy(() =>
  import("../../components/form-input/form-input.component")
);

const Button = React.lazy(() =>
  import("../../components/button/button.component")
);

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const restformFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formFields);
    try {
      const { user } = await signInEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      let errorMsg = error.message
        .split(":")[1]
        .replace("auth/", "")
        .replaceAll("-", " ");
      alert(errorMsg);
      return;
    }

    restformFields();
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user)
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={"google"} onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
