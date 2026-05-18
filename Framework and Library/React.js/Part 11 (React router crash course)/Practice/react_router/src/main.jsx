import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";


import TrackerApp from './Ts-tracking.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TrackerApp />
  </StrictMode>
);
