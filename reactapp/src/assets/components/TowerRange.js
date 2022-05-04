import { Component } from "../../base/baseStructor/Component";
import { CircleRenderer } from "./CircleRenderer";


export class TowerRange extends Component{

    #range;
    #circleRenderer;
    
    constructor(range, circleRenderer){
        super();
        this.#range = range;
        this.#circleRenderer = circleRenderer;
    }


    onStart(){
        // this.parent.addComponent(this.#circleRenderer, 0);
    }

    setRange(value){
        this.#circleRenderer.range = value;
        this.#range = value;
    }










}