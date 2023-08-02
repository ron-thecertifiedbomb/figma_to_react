import React from "react";
import "./PageThree.css";
import SideBar from "../../components/SideBar/SideBar";
import BreadCrumb from "../../components/BreadCrumbs/BreadCrumb";
import SearcBar from "../../components/SearchBar/SearcBar";
import TopIcons from "../../components/TopIcons/TopIcons";
import ImageRenderer from "../../components/ImageRenderer/ImageRenderer";
import {
  imageGroupOne,
  imageGroupTwo,
  imageGroupThree,
  imageGroupFour,
} from "../../components/SideBar/helpers";
import Footer from "../../components/Footer/Footer";

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

        <ImageRenderer imageGroupOne={imageGroupOne} marginTop={"29px"} />
        <ImageRenderer imageGroupOne={imageGroupTwo} marginTop={"18px"} />
        <ImageRenderer imageGroupOne={imageGroupThree} marginTop={"19px"} />
        <ImageRenderer imageGroupOne={imageGroupFour} marginTop={"19px"} />
        <Footer width={'100%'} paddingLeft={'25px'} paddingRight={'25px'}/>
      </div>
    </div>
  );
};

export default PageThree;
