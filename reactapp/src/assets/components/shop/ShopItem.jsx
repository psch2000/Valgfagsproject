import React from "react";
import { TowerPlacere } from "../TowerPlacer";
import "./shop.css"


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
    towerType
  }) => {

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