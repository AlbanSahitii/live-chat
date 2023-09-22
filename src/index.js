import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/register.js";
import Main from "./components/main.js";
import reportWebVitals from "./reportWebVitals";

const jwt = localStorage.getItem("jwt");
console.log(jwt);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={jwt ? <Main /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
