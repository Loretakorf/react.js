import React from "react";
import "./ArtWorkCard.css";
import { Link } from "react-router-dom";

const ArtWorkCard = ({
  src,
  alt,
  className = "",
  title,
  id,
  onClick,
  size,
  total_count,
}) => {
  return (
    <div className="img-container">
      <Link to={id}>
        <img
          className={`${className}`}
          src={src}
          alt={alt}
          onClick={onClick}
          size={size}
          total_count={total_count}
        />
      </Link>

      <p className="artwork-title">{title}</p>
    </div>
  );
};
export default ArtWorkCard;
