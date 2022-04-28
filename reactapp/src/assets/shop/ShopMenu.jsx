import {shop} from "./shop.css"
import { ShopItemComponent } from "./ShopItemComponent"
import { ShopItem } from "./ShopItem";



export const ShopMenuObject = {
    items: [
        new ShopItem("./images/test_tower.png", 200),
        new ShopItem("./images/test_tower.png", 300),
        new ShopItem("./images/test_tower.png", 350),
        new ShopItem("./images/test_tower.png", 400),
        new ShopItem("./images/test_tower.png", 500),
        new ShopItem("./images/test_tower.png", 650),
    ]

}

export const ShopMenu = () =>{

    const items = ShopMenuObject.items;

    return <div className="shopMenu grid-rows-3 grid  grid-flow-col">

    
        
        {items.map((item, index) => {

            {console.log(item.imagePath)}
            return (<ShopItemComponent key={index} price={item.price} imagePath={item.imagePath}></ShopItemComponent>);
            

        })}


    </div>

}