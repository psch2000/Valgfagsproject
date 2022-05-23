import { EventHandler } from "../../base/baseBehaviour/EventHandler";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { Component } from "../../base/baseStructor/Component";
import { Input } from "../../GameEngine/input/Input";
import { CircleRenderer } from "./CircleRenderer";


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
        this.#fire();
    }

    #setRadius(value){
        this.#collider.radius = value;
        this.#renderer.radius = value;
        this.#radius = value;
    }


    #fire(){

        this.#setRadius(this.#radius + this.increasValue);


        if (this.#radius >= this.maxRadius){

            this.#setRadius(0);
            this.onReachedMaxRadius.invoke();
            this.#isIncreasing = false;
        }
    }


}