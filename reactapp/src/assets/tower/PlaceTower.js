import { Composit } from "../../base/baseStructor/Composit"
import { Game } from "../app/App";
import { SquareRenderer } from "../components/SquareRenderer";


export const PlaceTower = () => {
    
    var c = new Composit();


    c.addComponent(new SquareRenderer(10, 10, 'blue'));

    var mousePos = Game.window.getMousePosition();
    Game.instantiate(c, {x: mousePos.x, y: mousePos.y});

}