import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./utils/redux/store/store";
import "./styles/index.css";

import App from "./routes";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
