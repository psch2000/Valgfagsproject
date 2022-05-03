import { Circle } from "../../base/baseStructor/Circle";
import { Component } from "../../base/baseStructor/Component";


export class TowerRange extends Component{

    #range;
    #circleCollider;
    
    constructor(range){
        super();
        this.#range = range;
        // this.#circleCollider = new CircleCollider(range);
    }

    setRange(value){
        this.#circleCollider.range = value;
        this.#range = value;
    }



    onStart(){
        // this.parent.addComponent(this.#circleCollider);
    }







}