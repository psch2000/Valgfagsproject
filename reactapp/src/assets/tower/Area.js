import { EventHandler } from "../../base/baseBehaviour/EventHandler";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { Component } from "../../base/baseStructor/Component";
import { App } from "../app/App";
import { CircleRenderer } from "../components/CircleRenderer";



export class Area extends Component {

    #circleCollider;
    #circleRenderer;
    #range;

    #increaseValue;
    

    constructor(increaseValue, maxRange){
        super();
        this.maxRange = maxRange; 
        this.canIncreaseRange = true;
         
        this.#increaseValue = increaseValue;
        this.onReachedMaxRange = new EventHandler();
    }

    onStart(){
        this.#circleCollider = this.getComponent(CircleCollider);
        this.#circleRenderer = this.getComponent(CircleRenderer);
    }

    onUpdate(){

        if (this.canIncreaseRange == false) return;
        this.#setRange(this.#range + this.#increaseValue);

        if (this.#range >= this.maxRange){
            this.onReachedMaxRange.invoke();
            this.#setRange(0);
            this.canIncreaseRange = false;
        }
    }

    #setRange(value){
        this.#circleCollider.radius = value;
        this.#circleRenderer.radius = value;
        this.#range = value;
    }

}