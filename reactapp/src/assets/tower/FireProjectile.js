import { Composit } from "../../base/baseStructor/Composit";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { Game } from "../app/App";
import { MoveDirection } from "../components/MoveDirection";
import { SquareRenderer } from "../components/SquareRenderer";


export const FireProjectile = () =>{

    var a = new Vector2d(0, 0);
    
    var mousePos = Game.window.getMousePosition();

    var b = new Vector2d(mousePos.x, mousePos.y);

    var dir = Vector2d.substract(b, a).normalize();

    var c = new Composit();

    c.addComponent(new SquareRenderer(2, 2, 'red'));
    c.addComponent(new MoveDirection(dir, 1));
    Game.instantiate(c);
    
}