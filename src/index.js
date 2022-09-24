import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
