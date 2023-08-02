import React from "react";
import "./ImageRenderer.css";



const ImageRenderer = ({imageGroupOne, marginTop, flexDirection}) => {
  return (
    <div className="image-renderer-wrapper" style={{marginTop: marginTop, flexDirection: flexDirection}}>
      {imageGroupOne.map((image, index) => (
        <div  key={index}>
          <img src={image.image} alt="image"></img>
        </div>
      ))}
    </div>
  );
};

export default ImageRenderer;
