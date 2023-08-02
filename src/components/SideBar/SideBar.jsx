import React from "react";
import "./SideBar.css";
import LogoHolder from "../LogoHolder/LogoHolder";
import Line from '../../assets/line.png'

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
        <LogoHolder fontColor={"black"} />
      <div className="line" style={{ marginTop: '12px'}}>
   <img src={Line} alt="line"></img>
      </div>


      
    </div>
  );
};

export default SideBar;
