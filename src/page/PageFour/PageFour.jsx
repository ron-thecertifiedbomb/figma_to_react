import React from "react";
import './PageFour.css'
import SideBar from "../../components/SideBar/SideBar";
import BreadCrumb from "../../components/BreadCrumbs/BreadCrumb";
import SearcBar from "../../components/SearchBar/SearcBar";
import TopIcons from "../../components/TopIcons/TopIcons";
import ImageRenderer from "../../components/ImageRenderer/ImageRenderer";
import {

  imageGroupFive,
} from "../../components/SideBar/helpers";
import Footer from "../../components/Footer/Footer";


const PageFour = () => {
  return (
    <div className="pagefour-wrapper">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="right-page-column">
        <header>
          <div className="sub-header">
            <div className="left-column">
              <BreadCrumb titleone={'Pages'} titletwo={'Tables'} />
              <h1 style={{ marginTop: "8px" }}>Tables</h1>
            </div>

            <div className="right-column">
              <SearcBar />
              <TopIcons />
            </div>
          </div>
        </header>

       
        <ImageRenderer imageGroupOne={imageGroupFive} marginTop={"19px"} flexDirection={'column'} />
        <Footer width={'100%'} paddingLeft={'25px'} paddingRight={'25px'}/>
      </div>
    </div>
  );
};

export default PageFour;
