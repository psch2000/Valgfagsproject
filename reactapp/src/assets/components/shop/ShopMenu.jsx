<<<<<<< HEAD:reactapp/src/assets/shop/ShopMenu.jsx
import {shop} from "./shop.css"
import { ShopButton } from "./ShopButton";
import { ShopButtonComponent } from "./ShopButtonComponent"
import { ShopItem } from "./ShopItem";
=======
import "./shop.css"
import { ShopButton, ShopItem } from "./ShopItem"
import { ShopItemObj } from "./ShopItemObject";
>>>>>>> mergeBranche:reactapp/src/assets/components/shop/ShopMenu.jsx



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

<<<<<<< HEAD:reactapp/src/assets/shop/ShopMenu.jsx
            return (<ShopButtonComponent key={index}  price={item.price} imagePath={item.imagePath}></ShopButtonComponent>);
=======
            {console.log(item.imagePath)}
            //return (<ShopItem key={index} price={item.price} imagePath={item.imagePath}></ShopItem>);
            return (<ShopButton key={index} price={item.price} imagePath={item.imagePath}></ShopButton>)
            

>>>>>>> mergeBranche:reactapp/src/assets/components/shop/ShopMenu.jsx
        })}


    </div>

}