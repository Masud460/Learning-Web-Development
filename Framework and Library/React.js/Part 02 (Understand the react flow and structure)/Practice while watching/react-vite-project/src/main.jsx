import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactApp from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ReactApp />
  </StrictMode>
);
