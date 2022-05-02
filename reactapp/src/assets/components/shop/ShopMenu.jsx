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
    ]

}

export const ShopMenu = () =>{

    const items = ShopMenuObject.items;

    return <div className="shopMenu grid-rows-3 grid  grid-flow-col">

    
        
        {items.map((item, index) => {

            {console.log(item.imagePath)}
            return (<ShopButton key={index} price={item.price} imagePath={item.imagePath}></ShopButton>)
            

        })}


    </div>

}