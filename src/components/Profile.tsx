import { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import user from "../assets/images/image-jeremy.png";

export const Profile: FC = () => {
  return (
    <>
      <article className="w-[90%] h-[13rem] mt-10  relative z-20 bg-indigo-600 rounded-xl">
        <div className="w-full h-[8rem] bg-red-300 relative rounded-2xl flex justify-center items-center">
          <img
            src={user}
            alt="user profile pic"
            className="rounded-full border-2 border-white  w-[4.5rem] h-[4.5rem]"
          />
          <div className="ml-5">
            <h4>Report for</h4>
            <h3 className="text-xl">Jeremy Robson</h3>
          </div>
        </div>
        <nav className="text-indigo-300 flex justify-around pt-7 ">
          <Link to="/daily" className="hover:text-white">
            Daily
          </Link>
          <Link to="/weekly" className="hover:text-white">
            Weekly
          </Link>
          <Link to="/monthly" className="hover:text-white">
            Monthly
          </Link>
        </nav>
      </article>
    </>
  );
};
