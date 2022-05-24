import { EventHandler } from "../../base/baseBehaviour/EventHandler";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { Component } from "../../base/baseStructor/Component";
import { Input } from "../../GameEngine/input/Input";
import { CircleRenderer } from "./CircleRenderer";

// Makes an area effect that invokes a event, when it should use the effekt.
export class Area extends Component{
    
    #renderer;
    #collider;
    #isIncreasing = false;

    #radius = 0;


    constructor(increasValue, maxRadius){
        super();
        this.increasValue = increasValue;
        this.maxRadius = maxRadius;
        this.onReachedMaxRadius = new EventHandler();
        this.canIncrease = false;
    }


    onStart(){

        this.#renderer = this.getComponent(CircleRenderer);
        this.#collider = this.getComponent(CircleCollider);

        if (this.#renderer == null) throw new Error("require circle renderer");
        if (this.#collider == null) throw new Error("require circle collider");
    }


    onUpdate(){

        if (this.canIncrease == true){
            this.#isIncreasing = true;
        }


        if (this.#isIncreasing == false){
            if (this.canIncrease == false) return;  
            return;
        }
        this.#increase();
    }

    #setRadius(value){
        this.#collider.radius = value;
        this.#renderer.radius = value;
        this.#radius = value;
    }


    // Increases the current radius, when it hits max it invokes the onReachedMaxRadius event.
    #increase(){

        this.#setRadius(this.#radius + this.increasValue);


        if (this.#radius >= this.maxRadius){

            this.#setRadius(0);
            this.onReachedMaxRadius.invoke();
            this.#isIncreasing = false;
        }
    }


}