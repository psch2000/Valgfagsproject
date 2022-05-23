import { App } from "../../../assets/app/App";
import { KeyValuePair } from "../../../backend/data-structors/KeyValuePair";
import { Component } from "../Component";
import { Intersect } from "../Intersect";
import { Transform } from "../Transform";

export const COLLIDERS = [];

export class Collider extends Component {

    static index = 0;

    constructor() {
        super();
        this.transform = new Transform();

        this.i = Collider.index;
        Collider.index++;

        this.hits = [];
        this.colliders = [];

        COLLIDERS.push(this);
    }
    
    onIntersect(other){
        var index = other.i;

        if (this.hits[index] === undefined || this.hits[index] === false){
            this.parent.onEnter(other.parent);
            this.hits[index] = true;
            this.colliders.push(other);
        }
    }

    onUpdate(){
        this.colliders.forEach(other => {
            if (this.doesOverlap(other) === false || COLLIDERS.includes(other) === false){
                this.hits[other.i] = false;
                this.parent.onExit(other.parent);
                var index = this.colliders.indexOf(other);
                this.colliders.splice(index, 1);
            }
        })
    }

    onIntersect(other){
        var index = other.i;

        if (this.hits[index] === undefined || this.hits[index] === false){
            this.parent.onEnter(other.parent);
            this.hits[index] = true;
            this.colliders.push(other);
        }
    }


    onUpdate(){

        

        this.colliders.forEach(other => {
            if (this.doesOverlap(other) === false || other.parent.isActive === false){
                this.hits[other.i] = false;
                this.parent.onExit(other.parent);
                var index = this.colliders.indexOf(other);
                this.colliders.splice(index, 1);
            }
        })
    }

    getOrigo(){
        throw new Error('getOrigo() is not defined');
    }

    getLeft(){
        throw new Error("left not implemented.");
    }
    getRight(){
        throw new Error("right not implemented.");
    }

    getTop(){
        throw new Error("top not implemented.");
    }

    getBottom(){
        throw new Error("bottom not implemented.");
    }


    onDestroy(){
        this.isActive = false;
        let index = COLLIDERS.indexOf(this);
        COLLIDERS.splice(index, 1);
    }

    doesOverlap(other) {
        return Intersect.intersects(this, other);
    }

    static doesOverlap(first, second) {
        return Intersect.intersects(first, second);
    }
}