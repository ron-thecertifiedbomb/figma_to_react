import React, { useState, useEffect } from "react";
import "./welcome.css";
import Toggle from "../../components/Toggle/Toggle";
import Button from "../../components/Button/Button";
import bgtwo from "../../assets/bg2.png";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import DashboardIcon from "../../assets/svg/dashboard.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import SignUp from "../../assets/svg/signup.svg";
import Key from "../../assets/svg/key.svg";
import Logo from "../../assets/svg/logo.svg";
import Input from "../../components/Input/Input";

const Welcome = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navStylesTwo = {
    borderRadius: "15px",
    border: "1.5px solid #FFF",
    background:
      "linear-gradient(137deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.80) 100%)",
    boxShadow:
      "0px 7.000000476837158px 23.000001907348633px 0px rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(10.500000953674316px)",
    padding: "30px",
  };

  return (
    <main
      className="welcome_container_wrapper"
      style={{
        backgroundImage: windowWidth > 400 ? `url(${bgtwo})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="wrapper-box-one">
        <NavBar
          styles={navStylesTwo}
          padding={"30px"}
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

        <h1 style={{ marginBottom: "8.5px", marginTop: "150px" }}>
          Welcome Back
        </h1>
        <p style={{ marginBottom: "36px" }}>
          Enter your email and password to sign in
        </p>
        <Input title={"Email"} placeholder={"Your Email Address"} />
        <Input title={"Password"} placeholder={"Your Password"} />
        <Toggle />
        <Button
          title={"Sign in"}
          backgroundColor={"#4FD1C5"}
          width={"350px"}
          height={"45px"}
          border={"none"}
          borderRadius={"12px"}
          marginTop={"36px"}
          marginBottom={"0"}
        />
 
<h1 className='bottom-text' style={{ marginTop:" 22px"}}>Dont have an account? <span>Sign up</span></h1>


        <div className="footer-wrapper"> <Footer /></div>
       
      </section>
    </main>
  );
};

export default Welcome;
