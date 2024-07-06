import App from "./App.jsx";

// react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// styles
import "./index.scss";
import "../node_modules/boxicons/css/boxicons.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
