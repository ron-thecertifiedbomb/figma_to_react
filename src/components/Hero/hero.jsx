import React from "react";

import "./hero.css";


const Hero = ({bg , title}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


   {title}
    </section>
  );
};

export default Hero;
