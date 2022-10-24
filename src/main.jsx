import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/index.css";
import Home from "./pages/index";
import Login from "./pages/LogIn";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
