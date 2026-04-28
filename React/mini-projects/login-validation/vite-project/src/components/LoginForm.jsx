// components/LoginForm.jsx

import React, { useState } from "react";
import { validateField } from "../utils/validation";

const LoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev, //Copies existing state.
      [name]: value,
    }));

    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const isFormValid =
    form.username &&
    form.password &&
    Object.values(errors).every((err) => !err);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    alert("Login Successful");
    console.log(form);

    setForm({
      username: "",
      password: "",
    });

    setErrors({});
  };

  return (
    <div style={styles.container}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p style={styles.error}>{errors.username}</p>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p style={styles.error}>{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            ...styles.button,
            backgroundColor: isFormValid ? "#007bff" : "#ccc",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial",
  },
  inputGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  button: {
    padding: "10px",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
};

export default LoginForm;
