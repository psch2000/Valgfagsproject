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
    buttonSize,
    rect, 
    offset
  }) => {
  
    const CheckButtonStyle = Styles.includes(buttonStyle) 
    ? buttonStyle 
    : Styles[3];
  
    const CheckButtonSize = Sizes.includes(buttonSize)
    ? buttonSize
    : Sizes[1];

    const Offset = {
      left: `${rect.x + offset.x}px`,
      top: `${rect.y + offset.y}px`,
    }
    
    
    return(
      <button 
        className={`btn ${CheckButtonStyle} ${CheckButtonSize} ${Offset}`} onClick={onClick}>
          <div className="waveContainer">
            <img className="waveIcon" src="./images/sprite_play.png"></img>
          </div>
      </button>
    )
  };