import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Suppress ResizeObserver loop errors — these are benign browser notifications
// thrown as non-Error objects that cause the Vite runtime error plugin to crash
// the dev server. They do not affect application functionality.
const _origError = window.onerror;
window.onerror = function (message, source, lineno, colno, error) {
  if (typeof message === "string" && message.includes("ResizeObserver")) {
    return true;
  }
  if (_origError) return _origError(message, source, lineno, colno, error);
  return false;
};

window.addEventListener("error", (e) => {
  if (
    e.message &&
    (e.message.includes("ResizeObserver") ||
      e.message.includes("ResizeObserver loop"))
  ) {
    e.stopImmediatePropagation();
    e.preventDefault();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
