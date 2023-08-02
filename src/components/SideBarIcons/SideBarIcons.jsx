import React from 'react';
import './SibeBarIcons.css';


const SideBarIcons = ({ icons, title, isActive, setActiveIcon }) => {

    return (
      <div
        className={isActive ? 'side-bar-icon-active' : 'side-bar-icon'}
        onClick={() => setActiveIcon(isActive ? null : title)}
      >
        <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
          <div className='icon-box'>
            <img src={icons} alt='icon'></img>
      
            
          </div>
        </div>
        <div className='icon-title'>
          <p className={isActive ? 'links-active' : 'links'}>{title}</p>
        </div>
  
      </div>
    );
  };
  
  export default SideBarIcons;