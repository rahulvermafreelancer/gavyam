import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "./index.css";
import "tw-elements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
