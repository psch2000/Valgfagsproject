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

export const ShopMenu = ({rect, offset}) =>{


    const style = {
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    }

    const items = ShopMenuObject.items;

    return <div style={style} className="shopMenu grid-rows-3 grid  grid-flow-col">

    
        
        {items.map((item, index) => {

            {console.log(item.imagePath)}
            //return (<ShopItem key={index} price={item.price} imagePath={item.imagePath}></ShopItem>);
            return (<ShopButton key={index} price={item.price} imagePath={item.imagePath}></ShopButton>)
            

        })}


    </div>

}