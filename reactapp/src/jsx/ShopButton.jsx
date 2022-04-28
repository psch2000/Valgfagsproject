import React from "react";
import "../css/shopbutton.css"

const Styles = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--succes--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--succes--outline",
];

const Sizes = ["btn--medium", "btn--large"];

export const ShopButton = ({ 
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize
}) => {

  const CheckButtonStyle = Styles.includes(buttonStyle) 
  ? buttonStyle 
  : Styles[0];

  const CheckButtonSize = Sizes.includes(buttonSize)
  ? buttonSize
  : Sizes[0];

  return(
    <button 
      className={`btn ${CheckButtonStyle} ${CheckButtonSize}`}
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  )
};