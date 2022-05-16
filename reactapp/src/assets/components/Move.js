import { Component } from "../../base/baseStructor/Component";

// abstract class
export class Move extends Component {
    constructor(direction, speed) {
        super();
        this.direction = direction;
        this.speed = speed;
    }

    onUpdate() {
        throw new Error("method 'onUpdate' is not implemented from abstract class Move");
    }
}