import React from "react";
import ReactDOM from "react-dom/client";
import AboutUs from "./components/AboutUs";
import './about.css';
import reportWebVitals from "./reportWebVitals";
const root=ReactDOM.createRoot(document.getElementById("first-demo"));
root.render(
   <React.StrictMode>
    <AboutUs />
   </React.StrictMode>
)
reportWebVitals();