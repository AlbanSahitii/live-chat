import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/register.js";
import reportWebVitals from "./reportWebVitals";

const jwt = localStorage.getItem("jwt");

const App = () => (
  <BrowserRouter>
    <Routes>
      {jwt ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      ) : (
        <>
          <Route path="/" />
        </>
      )}
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
