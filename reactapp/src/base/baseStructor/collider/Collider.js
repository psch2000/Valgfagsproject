import { Component } from "../Component";
import { Intersect } from "../Intersect";

export class Collider extends Component {
    constructor() {
        super();
    }

    doesOverlap(other) {
        Intersect.intersects(this, other);
    }

    static doesOverlap(first, second) {
        Intersect.intersects(first, second);
    }
}