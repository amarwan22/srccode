import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./CSS/components/loading.css"
import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "./CSS/base/media.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>
);
