import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  document.body.innerHTML =
    "<p style='padding:2rem;font-family:system-ui'>Missing #root element. Open this site via <code>npm run dev</code>, not by double-clicking index.html.</p>";
} else {
  createRoot(root).render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

