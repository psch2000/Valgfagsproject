import { SquareFactory } from "../../creationals/factory method pattern/factories/composits/SquareFactory";
import { GameManager } from "../../Managers/GameManager";

import { State } from "../State";


export class TestState extends State {

    constructor(){
        super();
    }   

    execute(){

        console.log("executing state...");
    }
}

