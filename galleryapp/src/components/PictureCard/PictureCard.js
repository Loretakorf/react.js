import React from "react";
import "./PictureCard.css"

const PictureCard = ({ src, alt, className= "", author }) => {
    return (
      <div className="img-container">
        <img className={`${className}`} src={src} alt={alt} />
        <p>{author}</p>
      </div>
    );
  };
  export default PictureCard;