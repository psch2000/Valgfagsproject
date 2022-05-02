import {shop} from "./shop.css"
import { ShopButton } from "./ShopButton";
import { ShopButtonComponent } from "./ShopButtonComponent"
import { ShopItem } from "./ShopItem";



export const ShopMenuObject = {
    items: [
        new ShopItem("./images/test_tower.png", 200),
        new ShopItem("./images/sprite_ball_black.png", 300),
        new ShopItem("./images/sprite_ball_blue.png", 400),
        new ShopItem("./images/sprite_ball_red.png", 500),
        new ShopItem("./images/sprite_ball_white.png", 600),
        new ShopItem("./images/sprite_ball_yellow.png", 700),
       
    ]

}

export const ShopMenu = () =>{

    const items = ShopMenuObject.items;

    return <div className="shopMenu grid-rows-3 grid  grid-flow-col">

    
        
        {items.map((item, index) => {

            return (<ShopButtonComponent key={index}  price={item.price} imagePath={item.imagePath}></ShopButtonComponent>);
        })}


    </div>

}