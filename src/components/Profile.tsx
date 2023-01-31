import { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import user from "../assets/images/image-jeremy.png";
import { Daily } from "./DailyRoute";
import { Monthly } from "./MonthlyRoute";
import { Weekly } from "./WeeklyRoute";

export const Profile: FC = () => {
  const [showDaily, setShowDaily] = useState(false);
  const [showWeekly, setShowWeekly] = useState(false);
  const [showMonthly, setShowMonthly] = useState(false);

  return (
    <>
      <article className="w-[90%] h-[13rem] md:w-[18rem] md:h-[30rem] lg:h-[35.6rem] mt-10 md:mt-0 lg:mt-[5.6rem] z-20 rounded-xl text-white cardForegroundColor">
        <div className=" w-full h-[8.5rem] md:h-auto bg-[bg-indigo-600] flex justify-evenly items-center md:items-start md:flex-col md:pl-7 rounded-lg bg-indigo-600">
          <img
            src={user}
            alt="user's profile pic"
            className="border-4 w-[5rem] h-[5rem] rounded-full md:mt-8 md:mb-4"
          />
          <div className="md:mb-[5rem]">
            <p>Report for</p>
            <h3 className="text-[1.5rem] md:text-[2.4rem]">Jeremy Robson</h3>
          </div>
        </div>
        <nav className="cardForegroundColor flex md:flex-col md:py-5 h-[4.5rem] md:h-[9rem] md:items-start md:pl-7 justify-around items-center rounded-b-xl">
          <a
            href="#"
            className="hover:text-white"
            onClick={() => {
              setShowDaily(!showDaily);
              setShowWeekly(false);
              setShowMonthly(false);
            }}
          >
            Daily
          </a>
          <a
            href="#"
            className="hover:text-white"
            onClick={() => {
              setShowDaily(false);
              setShowWeekly(!showWeekly);
              setShowMonthly(false);
            }}
          >
            Weekly
          </a>
          <a
            href="#"
            className="hover:text-white"
            onClick={() => {
              setShowDaily(false);
              setShowWeekly(false);
              setShowMonthly(!showMonthly);
            }}
          >
            Monthly
          </a>
        </nav>
      </article>
      {showDaily ? <Daily /> : ""}
      {showWeekly ? <Weekly /> : ""}
      {showMonthly ? <Monthly /> : ""}
    </>
  );
};
