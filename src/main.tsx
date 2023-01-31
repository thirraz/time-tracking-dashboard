import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Daily } from "./components/DailyRoute";
import { Monthly } from "./components/MonthlyRoute";
import { Weekly } from "./components/WeeklyRoute";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

{
  /* <BrowserRouter>
  <App />
  <Routes>
    <Route path="/daily" element={<Daily />} />
    <Route path="/weekly" element={<Weekly />} />
    <Route path="/monthly" element={<Monthly />} />
  </Routes>
</BrowserRouter> */
}
