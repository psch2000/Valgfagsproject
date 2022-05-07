import { useEffect } from "react";
import { OnEndResize } from "../../../events/OnEndResize";
import { useForceRerenderer } from "../../hooks/useForceRenderer";
import { TowerType } from "../../tower/TowerType";
import "./shop.css"
import { ShopButton, ShopItem } from "./ShopItem"
import { ShopItemObj } from "./ShopItemObject";



export const ShopMenuObject = {
    items: [
        new ShopItemObj("./images/test_tower.png", 200),
        new ShopItemObj("./images/test_tower.png", 300),
        new ShopItemObj("./images/test_tower.png", 350),
        new ShopItemObj("./images/test_tower.png", 400),
        new ShopItemObj("./images/test_tower.png", 500),
        new ShopItemObj("./images/test_tower.png", 650),
    ],
    
    
    towerTypes: [
        TowerType.blueTower,
        TowerType.redTower,
        TowerType.greenTower,
        TowerType.whiteTower,
        TowerType.yellowTower,
        TowerType.orangeTower,
        // new TowerType("Blue Tower", 15, 30, 'blue', 100, "./images/test_tower.png"),
        // new TowerType("Red Tower", 15,  35, 'red', 200, "./images/test_tower.png"),
        // new TowerType("Gree Tower", 15,  40, 'green', 300, "./images/test_tower.png"),
        // new TowerType("White Tower", 15, 50, 'white', 500, "./images/test_tower.png"),
        // new TowerType("Black Tower", 15, 100, 'black', 1000, "./images/test_tower.png"),
        // new TowerType("Orange Tower", 15, 200, 'orange', 2000, "./images/test_tower.png"),
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