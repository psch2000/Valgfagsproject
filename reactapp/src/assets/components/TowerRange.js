import { Component } from "../../base/baseStructor/Component";
import { CircleRenderer } from "./CircleRenderer";


export class TowerRange extends Component{

    #range;
    #circleRenderer;
    
    constructor(range){
        super();
        this.#range = range;
        this.#circleRenderer = new CircleRenderer(50, "#000000CC", true);
    }


    onStart(){
        this.parent.addComponent(this.#circleRenderer);
    }

    setRange(value){
        this.#circleRenderer.range = value;
        this.#range = value;
    }










}