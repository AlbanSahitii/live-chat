import { websocket } from "../websocket.js";
import React, { useState } from "react";

// websocket();

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const body = { email, password };
    console.log(body);
    e.preventDefault();
    fetch("http://localhost:8080/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("API request failed");
        }
      })
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log("Login data:", formData);
  };

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
