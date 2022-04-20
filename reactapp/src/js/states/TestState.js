import { SquareFactory } from "../../factoryMethod/factories/SquareFactory";
import { GameManager } from "../../managers/GameManager";
import { State } from "../State";


export class TestState extends State {

    constructor(){
        super();
    }   

    execute(){

        var factory = new SquareFactory();

        var p = factory.makeProduct();

        GameManager.getInstance().instantiate(p);
    }
}