import React from 'react'
import Logo from "../../assets/svg/logo.svg";

const LogoHolder = ({fontColor}) => {
  return (
    <div>  <div className='logo_wrapper'>
    <img src={Logo} alt="logo" ></img>
    <h1 className='title-logo' style={{ color: fontColor }}>Vandelay Industries</h1>
  </div></div>
  )
}

export default LogoHolder