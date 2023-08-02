import React from 'react'
import './Footer.css'

const Footer = ({ width, paddingLeft, paddingRight}) => {
  return (
    <main className='footer' style={{ width: width, paddingLeft: paddingLeft, paddingRight: paddingRight }}>
       <h1 className='footer-title-right'>© 2022, Made with ❤️ by <span>Tektorch</span> for a better web</h1>
       <div className='footer-menu'>
        <p >About Us</p>
        <p>Privacy</p>
        <p>Blog</p>
        <p>License</p>
       </div>
       </main>
  )
}

export default Footer