import React from 'react';
import "./Button.css";

const Button = ({ label, onClick, className, style, imgSrc, imagePosition = 'left' }) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {imagePosition === 'left' && imgSrc && <img src={imgSrc} alt="button icon" className="button-img" />}
      {label}
      {imagePosition === 'right' && imgSrc && <img src={imgSrc} alt="button icon" className="button-img" />}
    </button>
  );
};

export default Button;
