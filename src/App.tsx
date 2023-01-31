import { FC } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DataJSON } from "./interfaces/dataJSON";
import { Daily } from "./components/DailyRoute";
import { Monthly } from "./components/MonthlyRoute";
import { Weekly } from "./components/WeeklyRoute";
import { Profile } from "./components/Profile";

export const App: FC = () => {
  return (
    <main className="appBg font-Rubik w-screen h-auto flex items-center justify-center flex-wrap">
      <BrowserRouter>
        <Profile />
        <Routes>
          <Route path="/daily" element={<Daily />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/monthly" element={<Monthly />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
