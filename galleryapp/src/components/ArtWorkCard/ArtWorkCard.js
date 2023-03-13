import React from "react";
import "./ArtWorkCard.css"

const ArtWorkCard = ({ src, alt, className= "", title }) => {
    return (
      <div className="img-container">
        <img className={`${className}`} src={src} alt={alt} />
        <p>{title}</p>
      </div>
    );
  };
  export default ArtWorkCard;