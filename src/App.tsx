import { FC } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DataJSON } from "./interfaces/dataJSON";
import { Daily } from "./components/DailyRoute";
import { Monthly } from "./components/MonthlyRoute";
import { Weekly } from "./components/WeeklyRoute";
import { Profile } from "./components/Profile";
import { InfosContainer } from "./components/InfosContainer";

export const App: FC = () => {
  return (
    <main className="appBg pb-[90rem] px-2 lg:px-[13rem] font-Rubik w-screen h-[screen] flex items-center justify-center flex-wrap md:flex-nowrap">
      <Profile />
    </main>
  );
};

export default App;
