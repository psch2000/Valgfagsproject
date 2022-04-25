import { SquareFactory } from "../../factoryMethod/factories/SquareFactory";
import { GameManager } from "../../managers/GameManager";
import { State } from "../State";
import { UpdateUIState } from "./UpdateUIState";


export class TestState extends State {

    constructor(){
        super();
    }   

    execute(){

        var factory = new SquareFactory();

        var p = factory.makeProduct();

        GameManager.getInstance().instantiate(p);

        console.log(p);
        this.context.setState(new UpdateUIState());
        this.context.execute();
    }
}