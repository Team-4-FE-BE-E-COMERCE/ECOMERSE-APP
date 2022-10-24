import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/index.css";
import Home from "./pages/index";
import Login from "./pages/LogIn";
import Register from "./pages/Register";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);
