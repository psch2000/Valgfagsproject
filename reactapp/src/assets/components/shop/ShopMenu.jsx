import { TowerType } from "../../tower/TowerType";
import "./shop.css"
import { ShopButton, ShopItem } from "./ShopItem"

//this contains our 6 different types of towers
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

//this display a shopmenu, which is a placable grid with the ShopItem buttons
export const ShopMenu = ({rect, offset}) =>{

    var style = {
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    }    
    
    const towerTypes = ShopMenuObject.towerTypes;

    return <div style={style} className="shopMenu grid-rows-3 grid  grid-flow-col">

        {towerTypes.map((item, index) => {

            return (<ShopButton towerType={item}  key={index} towerName={item.name}></ShopButton>)
        })}
    </div>

}