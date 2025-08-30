import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeatherDashboard from "./WeatherDashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherDashboard />
  </StrictMode>
);
