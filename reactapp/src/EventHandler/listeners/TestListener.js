import { Listener } from "../Listener";


export class TestListener extends Listener{

    constructor(){
        super();
    }

    onNotify(){
        console.log("notified");
    }
}