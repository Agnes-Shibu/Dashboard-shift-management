import React from "react";
import Cards from "../Cards/Cards";

import "./MainDash.css";
import MyCalendar from "../MyCalendar/MyCalendar";
const MainDash = () => {
  return (
    <div>
     <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
      </div>
      <div>
        <h2>Calendar</h2>
        <MyCalendar/>
      </div>
    </div>
    
  );
};

export default MainDash;
