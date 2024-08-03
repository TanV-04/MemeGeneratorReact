import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App"
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App darkMode = {true} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// index.js is responsible for rendering the main "App" component into the HTML element.
// ReactDOM.createRoot creates a root for the React app and root.render is used to render the React component tree into this root.
// The React.StrictMode component is a wrapper that helps identify potential problems in an application by highlighting components with unsafe lifecycle methods and other warnings.
