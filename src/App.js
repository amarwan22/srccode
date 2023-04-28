import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Auth/HomePage"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import "./index.css"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
