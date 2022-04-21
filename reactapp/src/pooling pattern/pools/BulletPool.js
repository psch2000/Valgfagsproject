import { MoveDirection } from "../../../composit pattern/components/MoveDirection";
import { SquareRenderer } from "../../compositPattern/components/SquareRenderer";
import { Composit } from "../../compositPattern/Composit";
import { GameManager } from "../../../managers/GameManager";
import { ReuseablePool } from "../ReuseablePool";


export class BulletPool extends ReuseablePool{

    constructor(){
        super();
    }


    makeReuseable(){
        var c = new Composit();
        c.addComponent(new MoveDirection({x: 1, y: 0}, 1));
        c.addComponent(new SquareRenderer(10, 10));

        return GameManager.getInstance().instantiate(c);
    }
}