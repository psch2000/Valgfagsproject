import React, { useEffect } from "react";
import { useState } from "react";
import { Player } from "../bank/Player";
import { TowerPlacere } from "../../tower/TowerPlacer";
import { TowerTextObj } from "../stats/TowerTextObj";
import "./shop.css"



const Styles = [
    "btn--shop--solid",
    "btn--shop--grey--solid",
    "btn--succes--solid",
  ];

  const Sizes = ["btn--shop", "btn--wave"];

export const ShopButton = ({ 
    buttonStyle, 
    buttonSize,
    towerType
  }) => {
    const [disable, setDisable] = useState(false);
    const onClick = () => {
      TowerPlacere.getInstance().setTowerType(towerType);
      TowerPlacere.getInstance().parent.setActive(true);
      setDisable(true);
      
    }

    useEffect(()=> {
      Player.bank.onSetBalance.addListener(onSetBalance);

    })

    function onSetBalance(){
      if(towerType.price <= Player.bank.getBalance()){
        setDisable(false);
      }
      else{
        setDisable(true);
      }
    }
  
    const CheckButtonStyle = ()=> {
      if(disable==true){
        return Styles[1]
      }
      else{
        return Styles.includes(buttonStyle) 
      ? buttonStyle 
      : Styles[0];
      }
    }
  
    const CheckButtonSize = Sizes.includes(buttonSize)
    ? buttonSize
    : Sizes[0];
  
    return(
      <button 
        onMouseEnter={hover}
        className={`btn ${CheckButtonStyle()} ${CheckButtonSize}`}
        onClick={onClick}
        disabled={disable}
      >
        <div className="shopInfo">
            <img className="shopImage" src={towerType.imagePath}></img>
            <p className="shopPrice">{towerType.price}$</p>
        </div>
      </button>
    )
  };