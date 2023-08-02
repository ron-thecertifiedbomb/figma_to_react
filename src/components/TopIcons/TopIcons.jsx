import React from "react";
import "./TopIcons.css";
import Person from "../../assets/person.png";
import Bell from "../../assets/bell.png";
import Sharp from "../../assets/sharp.png";

const TopIcons = () => {
  return (
    <div className="top-icons-wrapper">
      <div className="left">
        <img src={Person} alt="person" />
        <h1> Sign in</h1>
      </div>
      <div className="right">
        <img src={Sharp} alt="person" />
        <img src={Bell} alt="person" />
       
      </div>
    </div>
  );
};

export default TopIcons;
