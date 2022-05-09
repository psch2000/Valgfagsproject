import { useEffect } from "react";
import { OnEndResize } from "../../../events/OnEndResize";
import { useForceRerenderer } from "../../hooks/useForceRenderer";
import { TowerType } from "../../tower/TowerType";
import "./shop.css"
import { ShopButton, ShopItem } from "./ShopItem"
import { ShopItemObj } from "./ShopItemObject";



export const ShopMenuObject = {  
    
    towerTypes: [
        TowerType.blueTower,
        TowerType.redTower,
        TowerType.greenTower,
        TowerType.whiteTower,
        TowerType.yellowTower,
        TowerType.orangeTower,
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

            return (<ShopButton towerType={item}  key={index} ></ShopButton>)
            //{console.log(item.imagePath)}
            //return (<ShopButton key={index} price={item.price} imagePath={item.imagePath}></ShopButton>)           

        })}


    </div>

}