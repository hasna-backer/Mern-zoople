// components/RegistrationForm.jsx

import React, { useState } from "react";
import InputField from "./InputField";
import {
  validateField,
  getPasswordStrength,
} from "../utils/validation";
import "../styles/form.css";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);

    const error = validateField(name, value, updatedForm);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const strength = getPasswordStrength(form.password);

  const isFormValid =
    Object.values(form).every((val) => val) &&
    Object.values(errors).every((err) => !err);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    alert("Registration Successful");
    console.log(form);

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setErrors({});
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        {form.password && (
          <div className="strength-container">
            <div
              className={`strength-bar strength-${strength.score}`}
            />
            <p>Password Strength: {strength.label}</p>
          </div>
        )}

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <button type="submit" disabled={!isFormValid}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
