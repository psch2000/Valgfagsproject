import { Component } from "../Component";
import { Intersect } from "../Intersect";
import { Transform } from "../Transform";

export class Collider extends Component {
    constructor() {
        super();
        this.transform = new Transform();
    }

    doesOverlap(other) {
        Intersect.intersects(this, other);
    }

    static doesOverlap(first, second) {
        Intersect.intersects(first, second);
    }
}