
import { State } from "../State";


export class TestState extends State {

    constructor(){
        super();
    }   

    execute(){

        console.log("executing state...");
    }
}

