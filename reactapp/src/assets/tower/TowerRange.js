import { Component } from "../../base/baseStructor/Component";
import { Input } from "../../GameEngine/input/Input";
import { Enemy } from "../components/enemy/Enemy";


export class TowerRange extends Component{

    #range;
    #circleRenderer;
    #hitCursor = false;

    
    
    constructor(range, circleRenderer){
        super();
        this.#range = range;
        this.#circleRenderer = circleRenderer;
        this.enemiesInRange = [];
        this.target = null;
    }

    onEnter(other){

        if (other.name == "Cursor"){
            this.#hitCursor = true;
        }

        if (other.getComponent(Enemy) == null) return;

        // console.log(other.getComponent(Enemy))
        this.enemiesInRange.push(other);

    }

    onExit(other){

        if (other.name == "Cursor"){
            this.#hitCursor = false;
        }
        if (other.getComponent(Enemy) == null) return;

        if (this.enemiesInRange.includes(other) == false) return;

        var index = this.enemiesInRange.indexOf(other);
        this.enemiesInRange.splice(index, 0);

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

        if (this.enemiesInRange.length == 0) return;
        this.target = this.enemiesInRange[0];
        console.log(this.target)


    }





}