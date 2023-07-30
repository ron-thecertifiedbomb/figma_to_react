import React from "react";
import Title from "../Title/Title";
import "./hero.css";
import bg from "../../assets/bg.png";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Title />
    </section>
  );
};

export default Hero;
