import React from 'react'
import './welcome.css'

import bgtwo from "../../assets/bg2.png";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import DashboardIcon from "../../assets/svg/dashboard.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import SignUp from "../../assets/svg/signup.svg";
import Key from "../../assets/svg/key.svg";
import Logo from "../../assets/svg/logo.svg"
const Welcome = () => {

  const navStylesTwo = {
    borderRadius: '15px',
    border: '1.5px solid #FFF',
    background: 'linear-gradient(137deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.80) 100%)',
    boxShadow: '0px 7.000000476837158px 23.000001907348633px 0px rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10.500000953674316px)',
    padding: '30px'
  };
  
  return (
    <main className='welcome_container'   style={{
      backgroundImage: `url(${bgtwo})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
  
    }}
   
  >
 <section className='wrapper-box-one'>
 <NavBar
            styles={navStylesTwo}
        padding={'30px'}
        backgroundColor={"black"}
        color={"white"}
        textcolor={"white"}
        fontSize={"10px"}
        fontColor={"black"}
        logo={Logo}
        dashboard={DashboardIcon}
        profile={ProfileIcon}
        signup={SignUp}
        keyicon={Key}
      />
      

  <h1 style={{marginBottom: '8.5px', marginTop: '200px'}}>Welcome Back</h1>
  <p>Enter your email and password to sign in</p>
  {/* <Footer /> */}
 </section>

        </main>
  )
}

export default Welcome