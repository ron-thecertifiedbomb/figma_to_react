import React from "react";
import "./PageThree.css";
import SideBar from "../../components/SideBar/SideBar";
import BreadCrumb from "../../components/BreadCrumbs/BreadCrumb";
import SearcBar from "../../components/SearchBar/SearcBar";
import TopIcons from "../../components/TopIcons/TopIcons";

const PageThree = () => {
  return (
    <div className="pagethree-wrapper">
      <div className="sidebar">
     
        <SideBar />
      </div>
      <div className="right-page-column">
        <header>
          <div className="sub-header">
            <div className="left-column">
              <BreadCrumb />
              <h1 style={{ marginTop: "8px" }}>DashBoard</h1>
            </div>

            <div className="right-column">
              <SearcBar />
              <TopIcons />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default PageThree;
