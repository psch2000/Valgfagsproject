import { Circle } from "../../base/baseStructor/Circle";
import { Component } from "../../base/baseStructor/Component";


export class TowerRange extends Component{

    #range;
    #circleCollider;
    
    
    constructor(range, circleRenderer){
        super();
        this.#range = range;
    }

    setRange(value){
        this.#circleCollider.range = value;
        this.#range = value;
    }










}