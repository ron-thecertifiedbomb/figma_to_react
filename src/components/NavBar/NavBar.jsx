import React from 'react';
import './NavBar.css';

const NavBar = ({ styles, backgroundColor, textcolor, fontSize, fontColor, logo, dashboard, profile, signup, keyicon}) => {
  return (
    <nav  style={styles}>
      <div className='logo_wrapper'>
        <img src={logo} alt="logo" ></img>
        <h1 className='title-logo' style={{ color: fontColor }}>Vandelay Industries</h1>
      </div>

      <div className='menu-wrapper'>
        <div className='dashboard-wrapper' >
          <img src={dashboard} alt=''  width={'5px'}></img>
          <h1 className='title-dashboard' style={{ color: fontColor }}>Dashboard</h1>
        </div>

        <div className='profile-wrapper'>
          <img src={profile} alt=''></img>
          <h1 className='title-profile' style={{ color: fontColor }}>Profile</h1>
        </div>

        <div className='rounded-wrapper'>
          <img src={signup} alt=''></img>
          <h1 className='title-rounded-profile' style={{ color: fontColor }}>Sign Up</h1>
        </div>

        <div className='sign-wrapper'>
          <img src={keyicon} alt=''></img>
          <h1 className='title-sign' style={{ color: fontColor }}>Sign In</h1>
        </div>
      </div>

      <div className='button-wrapper'>
        <div className='download-button' style={{ backgroundColor: backgroundColor }}>
          <h1 className='button-title' style={{ color: textcolor, fontSize: fontSize }}>Free Download</h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
 