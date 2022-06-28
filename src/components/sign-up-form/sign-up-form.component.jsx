import './sign-up-form.style.scss';

import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const FormInput = React.lazy(() =>
  import("../../components/form-input/form-input.component")
);

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const restformFields = () => {
    setFormFields(defaultFormFields);
  };
  //   console.log(formFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formFields);
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      //   console.log(user);

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      //   console.log(userDocRef);
      restformFields();
      alert("User created successfully");
    } catch (error) {
      let errorMsg = error.message
        .split(":")[1]
        .replace("auth/", "")
        .replaceAll("-", " ");
      alert(errorMsg);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          id="displayName"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required={true}
        />
        <FormInput
          label="Email"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={email}
          required={true}
        />
        <FormInput
          label="Password"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
          required={true}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required={true}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
