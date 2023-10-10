"use client";

import { useState } from "react";

export default function NaviBar() {
  const [dropDown, setDropDown] = useState("none");

  const handleDropDown = () => {
    if (dropDown === "flex") {
      setDropDown("none");
    } else {
      setDropDown("flex");
    }
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropDown("flex");
    }, 700);
  };
  return (
    <nav
      id="nav"
      className="flex md:flex-row flex-col text-2xl w-full justify-center text-center pt-[50px] "
    >
      <div className="md:flex hidden w-[70%] min-w-[600px] justify-between">
        <a href="/">Home</a>
        <a href="/">Schedule</a>
        <a href="/committees">Committees</a>
        <a href="/call-for-papers">Call For Papers</a>
        <a href="/submissions">Submissions</a>
        <a href="/registration">Registration</a>
        <a href="/">Events</a>
      </div>
      <div className="md:hidden flex w-[95%] justify-end ">
        
        <button type="button" onClick={handleDropDown} className="flex ">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className="overflow-hidden md:hidden transition-all delay-600 bg-slate-100"
        style={{ height: dropDown === "none" ? "0px" : "100%" }}
      >
        <div
          className="w-full  flex-col flex-end mt-5  "
          id="navbar-default"
        >
          <div className="flex flex-col justify-end w-full">
            <a href="/">Home</a>
            <a href="/#schedules">Schedule</a>
            <a href="/committees">Committees</a>
            <a href="/call-for-papers">Call For Papers</a>
            <a href="/submissions">Submissions</a>
            <a href="/registration">Registration</a>
            <a href="/">Events</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
