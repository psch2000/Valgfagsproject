import { useEffect } from "react";
import { OnEndResize } from "../../../events/OnEndResize";
import { useForceRerenderer } from "../../hooks/useForceRenderer";
import { TowerType } from "../TowerType";
import "./shop.css"
import { ShopButton, ShopItem } from "./ShopItem"
import { ShopItemObj } from "./ShopItemObject";



export const ShopMenuObject = {  
    
    towerTypes: [
        new TowerType("Blue Tower", 30, 'blue', 100, "./images/sprite_monkey1.png"),
        new TowerType("Red Tower", 35, 'red', 200, "./images/sprite_monkey2.png"),
        new TowerType("Gree Tower", 40, 'green', 300, "./images/sprite_monkey3.png"),
        new TowerType("White Tower", 50, 'white', 500, "./images/sprite_monkey1.png"),
        new TowerType("Black Tower", 100, 'black', 1000, "./images/sprite_monkey1.png"),
        new TowerType("Orange Tower", 200, 'orange', 2000, "./images/sprite_monkey6.png"),
    ]
}

export const ShopMenu = ({rect, offset}) =>{

    var style = {
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    }    
    
    const towerTypes = ShopMenuObject.towerTypes;

    return <div style={style} className="shopMenu grid-rows-3 grid  grid-flow-col">

        {towerTypes.map((item, index) => {

            return (<ShopButton towerType={item}  key={index} towerName={item.name}></ShopButton>)
            //{console.log(item.imagePath)}
            //return (<ShopButton key={index} price={item.price} imagePath={item.imagePath}></ShopButton>)           

        })}


    </div>

}