import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Global.css";  // Import global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
