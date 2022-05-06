import React from "react";
import { TowerTextObj } from "../stats/TowerTextObj";
import { TowerPlacere } from "../TowerPlacer";
import "./shop.css"


const Styles = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--succes--solid",
  ];

  const Sizes = ["btn--shop", "btn--wave"];

export const ShopItem = ({imagePath, price}) => {


    return <button className=" shopButton
    bg-blue-500 hover:bg-blue-700
    text-white font-bold py-2 px-4 rounded">
        <div className="m-auto w-1/2">
            <img className="mt-9" src={imagePath}></img>
            <p className="mt-1">{price}$</p>
        </div>
        
    </button>
}

export const ShopButton = ({ 
    buttonStyle, 
    buttonSize,
    towerType,
    towerName
  }) => {

    function hover(){
      TowerTextObj.towerText = towerName;
      TowerTextObj.onSetText.invoke();
    }

    const onClick = () => {
      TowerPlacere.getInstance().setTowerType(towerType);
      TowerPlacere.getInstance().setActive(true);
    }
  
    const CheckButtonStyle = Styles.includes(buttonStyle) 
    ? buttonStyle 
    : Styles[0];
  
    const CheckButtonSize = Sizes.includes(buttonSize)
    ? buttonSize
    : Sizes[0];
    
    return(
      <button 
        onMouseEnter={hover}
        className={`btn ${CheckButtonStyle} ${CheckButtonSize}`}
        onClick={onClick} 
      >
        <div className="shopInfo">
            <img className="shopImage" src={towerType.imagePath}></img>
            <p className="shopPrice">{towerType.price}$</p>
        </div>
      </button>
    )
  };