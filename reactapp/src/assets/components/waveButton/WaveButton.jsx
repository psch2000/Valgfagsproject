import React, { useEffect } from "react";
import { waveSystem } from "../../../backend/Wavesystem";
import { useForceRerenderer } from "../../hooks/useForceRenderer";
import { TowerTextObj } from "../stats/TowerTextObj";
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
      waveSystem.onWaveChange.addListener(onWaveChange);
    }, [])

    function onWaveChange() {
      rerender();
    }

    function handleOnClick() {
      onClick();
      changeTowerText();
      TowerTextObj.onSetText.invoke();
    }

    function onHoverEnter() {
      changeTowerText();
      TowerTextObj.onSetText.invoke();
    }

    function changeTowerText() {
      let text = waveSystem.isWaveActive ? "Round is active" : "Start round";
      TowerTextObj.towerText = text;
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
        onMouseEnter={onHoverEnter}
        className={`btn ${CheckButtonStyle} ${CheckButtonSize}`} onClick={handleOnClick}>
          <div className="waveContainer">
            <img draggable={false} className="waveIcon noselect" src="./images/sprite_play.png"></img>
          </div>
      </button>
    )
  };