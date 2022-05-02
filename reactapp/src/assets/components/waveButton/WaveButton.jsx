import React from "react";
import "../shop/shop.css"

const Styles = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--succes--solid",
  ];

  const Sizes = ["btn--shop", "btn--wave"];

  export const WaveButton = ({ 
    onClick,
    buttonStyle, 
    buttonSize
  }) => {
  
    const CheckButtonStyle = Styles.includes(buttonStyle) 
    ? buttonStyle 
    : Styles[3];
  
    const CheckButtonSize = Sizes.includes(buttonSize)
    ? buttonSize
    : Sizes[1];
    
    
    return(
      <button 
        className={`btn ${CheckButtonStyle} ${CheckButtonSize}`} onClick={onClick}>
            <img className="waveIcon" src="./images/test_tower.png"></img>
      </button>
    )
  };