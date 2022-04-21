import { SquareRenderer } from "../../compositPattern/components/SquareRenderer";
import { TestController } from "../../compositPattern/components/TestController";

import { Composit } from "../../compositPattern/Composit";
import { GameManager } from "../../managers/GameManager";


import { BaseFactory } from "../BaseFactory";


export class SquareFactory extends BaseFactory{

    constructor(){
        super();
    }

    makeProduct(){

        // 1. Make the root composit.
        var c = new Composit();

        // 2. Add components to the composit.
        c.addComponent(new SquareRenderer(100, 100));
        c.addComponent(new TestController());

        // 3. Spawn/instantiate the composit into the game window/canvas.
        GameManager.getInstance().instantiate(c);
    }
}