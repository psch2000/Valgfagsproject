import { Component } from "../../base/baseStructor/Component";
import { Input } from "../../GameEngine/input/Input";


export class TowerRange extends Component{

    #range;
    #circleRenderer;
    #hitCursor = false;

    
    constructor(range, circleRenderer){
        super();
        this.#range = range;
        this.#circleRenderer = circleRenderer;
        this.towersInRange = [];
    }

    onEnter(other){

        if (other.name == "Cursor"){
            this.#hitCursor = true;
        }

        if (other.name != "Enemy") return;

        this.towersInRange.push(other);

    }

    onExit(other){

        if (other.name == "Cursor"){
            this.#hitCursor = false;
        }
        if (other.name != "Enemy") return;

        if (this.towersInRange.includes(other) == false) return;

        var index = this.towersInRange.indexOf(other);
        this.towersInRange.splice(index, 0);

    }




    setRange(value){
        // this.#circleRenderer.range = value;
        this.#range = value;
    }


    setIsShowingRange(value){
        // this.#circleRenderer.setActive(value);
    }



    onUpdate(){
        if (Input.getKeyDown('0')){
            // this.#circleRenderer.setActive(this.#hitCursor);
        }



    }





}