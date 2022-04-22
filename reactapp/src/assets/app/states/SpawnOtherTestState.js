import { State } from "../../../base/baseBehaviour/State";
import { Composit } from "../../../base/baseStructor/Composit";
import { Game } from "../App";


export class SpawnOtherTestState extends State{

    constructor(){
        super();
    }

    execute(){
        console.log("Is spawning other test state...");
    }
}