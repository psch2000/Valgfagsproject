import { Game } from "../app/App"
import {shop} from "./shop.css"



export const ShopButtonComponent = ({imagePath, price}) => {


    var towerPlacer = null;

    const handleOnClick = () => {

        while (towerPlacer == null){
            towerPlacer = Game.findObjectWithName("TowerPlacer");
        }

        var tp = towerPlacer.getComponent("TowerPlacer");
        tp.towerPrice = price;
        tp.isHoldingTower = true;
        console.log("ost")

        var sr = towerPlacer.getComponent("SpriteRenderer");
        sr.setPath(imagePath);

    }

    return <button onClick={() => handleOnClick()} className=" shopButton
    bg-blue-500 hover:bg-blue-700
    text-white font-bold py-2 px-4 rounded">
        <div className="m-auto w-1/2">
            <img className="mt-9" src={imagePath}></img>
            <p className="mt-1">{price}$</p>
        </div>
        
    </button>
}