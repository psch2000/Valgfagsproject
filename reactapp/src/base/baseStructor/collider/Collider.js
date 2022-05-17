import { App } from "../../../assets/app/App";
import { KeyValuePair } from "../../../backend/data-structors/KeyValuePair";
import { Component } from "../Component";
import { Intersect } from "../Intersect";
import { Transform } from "../Transform";

export const COLLIDERS = [];

export class Collider extends Component {
    constructor() {
        super();
        this.transform = new Transform();
        this.overlaps = new KeyValuePair();
        COLLIDERS.push(this);
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


    doesOverlap(other) {
        return Intersect.intersects(this, other);
    }

    static doesOverlap(first, second) {
        return Intersect.intersects(first, second);
    }
}