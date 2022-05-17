import React, { useEffect } from "react";
import { waveSystem } from "../../../backend/Wavesystem";
import { useForceRerenderer } from "../../hooks/useForceRenderer";
import "../shop/shop.css"

const Styles = [
    "btn--primary--solid",
    "btn--shop--grey--solid",
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
  
    const rerender = useForceRerenderer();

    useEffect(() => {
      waveSystem.onWaveChange.addListener(onWaveChange)
    }, [])

    function onWaveChange() {
      rerender();
    }

    // const CheckButtonStyle = Styles.includes(buttonStyle) 
    // ? buttonStyle 
    // : Styles[2];

    const CheckButtonStyle = waveSystem.isWaveActive ? Styles[1] : Styles[2];
  
    const CheckButtonSize = Sizes.includes(buttonSize)
    ? buttonSize
    : Sizes[1];

    const style = {
      left: `${rect.x + offset.x}px`,
      top: `${rect.y + offset.y}px`,
    }    
    
    return(
      <button style={style}
        className={`btn ${CheckButtonStyle} ${CheckButtonSize}`} onClick={onClick}>
          <div className="waveContainer">
            <img className="waveIcon" src="./images/sprite_play.png"></img>
          </div>
      </button>
    )
  };