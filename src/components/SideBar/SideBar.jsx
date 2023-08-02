import React, {useState} from "react";
import "./SideBar.css";
import LogoHolder from "../LogoHolder/LogoHolder";
import Line from '../../assets/line.png'
import SideBarIcons from "../SideBarIcons/SideBarIcons";
import { icons, iconstwo  }from './helpers'


const TextTitle = ({title}) => {
  return <div style={{ marginBottom: '24px'}}><h1>{title}</h1></div>
  }
  

const SideBar = () => {
  const [activeIcon, setActiveIcon] = useState('Dashboard');
  return (

    <div className="sidebar-wrapper">

        <LogoHolder fontColor={"black"} />
      <div className="line" style={{ marginTop: '12px', marginBottom: '22.5px'}}>
   <img src={Line} alt="line"></img>
      </div>

      {icons.map((icon, index) => (
        <SideBarIcons key={index} icons={icon.icon} title={icon.title}   isActive={activeIcon === icon.title}
        setActiveIcon={setActiveIcon}/>
      ))}
      <div style={{ display: 'flex', justifyContent: 'start', width: '100%', paddingLeft: '19px', marginTop: '20px'}}>
        <TextTitle  title={'ACCOUNT PAGES'}/></div>
        {iconstwo.map((icon, index) => (
        <SideBarIcons key={index} icons={icon.icon} title={icon.title}   isActive={activeIcon === icon.title}
        setActiveIcon={setActiveIcon}/>
      ))}
    </div>
  );
};

export default SideBar;
