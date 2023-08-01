import React from "react";
import "./home.css";
import Title from "../../components/Title/Title";
import BgOne from "../../assets/bgone.png";
import Logo from "../../assets/svg/logo.svg";
import DashWhite from "../../assets/svg/DashWhite.svg";
import ProfileWhite from "../../assets/svg/ProfileWhite.svg";
import SignUpWhite from "../../assets/svg/signupwhite.svg";
import KeyWhite from "../../assets/svg/keywhite.svg";
import LogoWhite from "../../assets/svg/logowhite.svg";
import NavBar from "../../components/NavBar/NavBar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

const Home = () => {


  const navStylesOne = {
    borderRadius: '15px',
    border: 'none',
    background: 'transparent',
    boxShadow: 'none',
    backdropFilter: 'blur(10.500000953674316px)',
  };
  
  return (
    <main
      className="home_container"
      style={{
        backgroundImage: `url(${BgOne})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="wrapper-box-container">

      <NavBar
        styles={navStylesOne}
        padding={'17.5px'}
        backgroundColor={"white"}
        color={"white"}
        textcolor={"black"}
        fontSize={"10px"}
        fontColor={"white"}
        logo={LogoWhite}
        dashboard={DashWhite}
        profile={ProfileWhite}
        signup={SignUpWhite}
        keyicon={KeyWhite}
      />

          <Title
            heading={"Welcome"}
            para={
              "Use these awesome forms to login or create new account in your project for free."
            }
            marginTop={'80px'}
            marginBottom={'50px'}
          />

          <Form />
          <Footer />
      </div>
    
     
    </main>
  );
};

export default Home;
