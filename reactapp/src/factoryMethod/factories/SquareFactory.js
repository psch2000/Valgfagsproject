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

        var c = new Composit();
        c.addComponent(new SquareRenderer(100, 100));
        c.addComponent(new TestController());
        return c;
    }
}