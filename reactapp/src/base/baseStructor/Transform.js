import { Component } from "./Component";
import { Vector2d } from "./Vector2d";

export class Transform extends Component {
    constructor() {
        super();
        this.position = new Vector2d(0, 0);
    }

    translate(vector) {
        this.position.x += vector.x;
        this.position.y += vector.y;
    }
}
