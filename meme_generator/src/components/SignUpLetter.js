import React, { useState } from "react";

export default function SignUpLetter() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    signUpToLetter: true, 
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    signUpToLetter: false,
  });

  // this function is used to manage form state
  function handleChange(event) {
    event.preventDefault(); // preventing the form from submitting and causing a page reload

    // event.target refers to the form element that triggered the event(input or checkbox)
    // name is the name of the form field 
    // type is the type of form field
    // value is the current value of the form field
    // checked is relevant for the form field
    const { name, type, value, checked } = event.target;

    // update form state with new values
    // prevState represents the current state of the form data before the update
    // ...prevState spreads the previous state into the new state object
    // [name] dynamically sets the property in the state object using the 'name' of the form field
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value, // This conditional expression checks if the form field is a checkbox
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Validation
    const emailError = validEmail(formData.email)
      ? ""
      : console.log("Please enter a valid email address.");
    const passwordError = formData.password
      ? ""
      : console.log("Password is required.");
    const confirmPasswordError =
      formData.password === formData.confirmPassword
        ? ""
        : console.log("Passwords do not match.");

    const hasErrors = emailError || passwordError || confirmPasswordError;

    if (hasErrors) {
      setErrors({
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
    } else {
      console.log(formData); // Log formData if validation passes
      setErrors({ email: "", password: "", confirmPassword: "" }); // Clear errors

      if (formData.signUpToLetter === true) {
        alert("thank you for signing up to our newsletter!");
      }
    }

    clearFields();
  }

  function clearFields(event) {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      signUpToLetter: false,
    });
    setErrors({ email: "", password: "", confirmPassword: "" }); // Clear errors
  }

  function validEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  return (
    <div className="bg-gray-500 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="formData">
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            value={formData.email}
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-800"
            } p-5 rounded-xl mr-5 mb-3 w-full`}
            type="text"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-200 mb-3">{errors.email}</p>}

          <input
            name="password"
            value={formData.password}
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-800"
            } p-5 rounded-xl mr-5 mb-3 w-full`}
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-200 mb-3">{errors.password}</p>
          )}

          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            className={`border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-800"
            } p-5 rounded-xl mr-5 w-full`}
            type="password"
            placeholder="Confirm your password"
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-200 mb-3">{errors.confirmPassword}</p>
          )}

          <div className="flex items-center mb-3 mt-3">
            <input
              id="signUpToLetter"
              name="signUpToLetter"
              checked={formData.signUpToLetter}
              className="border border-gray-800 rounded-xl mr-3"
              type="checkbox"
              onChange={handleChange}
            />
            <label htmlFor="signUpToLetter" className="text-white">
              Sign up to our newsletter!
            </label>
          </div>
          <button
            className="bg-purple-600 text-white p-3 rounded-lg mr-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}


// target represents the element that was modified in the event