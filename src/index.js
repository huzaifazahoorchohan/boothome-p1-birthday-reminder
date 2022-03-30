import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";
import "./styles/index.css";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
