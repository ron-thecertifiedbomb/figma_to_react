import React from 'react'
import './NavBar.css'
import Logo from '../../assets/icon.png'
import Dashboard from '../../assets/Iconbox.png'
import Profile from '../../assets/Iconprofile.png'
import Rounded from '../../assets/Iconprofile round.png'
import Key from '../../assets/Vectorkey.png'

const NavBar = () => {
  return (
    <nav>
      <div className='logo_wrapper'>
       <img src={Logo} alt="logo"></img>
       <h1 className='title-logo'>Vandelay Industries</h1>
      </div>

      <div className='menu-wrapper'>
      <div className='dashboard-wrapper'>
         <img src={Dashboard} alt=''></img>
         <h1 className='title-profile'>Dashboard</h1>
        </div>


        <div className='profile-wrapper'>
         <img src={Profile} alt=''></img>
         <h1 className='title-profile'>Profile</h1>
        </div>

        <div className='rounded-wrapper'>
         <img src={Rounded} alt=''></img>
         <h1 className='title-rounded-profile'>Sign Up</h1>
        </div>
      
        <div className='sign-wrapper'>
         <img src={Key} alt=''></img>
         <h1 className='title-sign'>Sign In</h1>
        </div>
      </div>


      <div className='button-wrapper'>
    <div className='download-button'><h1 className='button-title'>Free Download</h1></div>
      </div>

    </nav>
  )
}

export default NavBar