import Swal from "sweetalert2";

import React, { useState, useContext } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// import { UserContext } from "../../contexts/user.context";

import "./sign-up-form.style.scss";

const FormInput = React.lazy(() =>
  import("../../components/form-input/form-input.component")
);

const Button = React.lazy(() =>
  import("../../components/button/button.component")
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

  // const { setCurrentUser } = useContext(UserContext);

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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords don't match",
      });
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      //   console.log(user);
      // setCurrentUser(user);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User created successfully",
      });
      restformFields();
      await createUserDocumentFromAuth(user, {
        displayName,
      });
    } catch (error) {
      let errorMsg =
        error.message +
        ":".split(":")[1].replace("auth/", "").replaceAll("-", " ");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
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
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
