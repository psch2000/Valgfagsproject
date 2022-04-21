
import { Component } from "../Component";

export class TestComponent extends Component{

    constructor(){
        // I får en fejl, hvis i har en konstruktor uden 'super();'
        super();
    }

    // Brug den til at tegne/render med.
    draw(context){

    }

    // Brug den til alt andet end tegne logik.
    update(){

    }
}

