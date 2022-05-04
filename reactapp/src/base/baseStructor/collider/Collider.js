import { KeyValuePair } from "../../../backend/data-structors/KeyValuePair";
import { Component } from "../Component";
import { Intersect } from "../Intersect";
import { Transform } from "../Transform";

export class Collider extends Component {
    constructor() {
        super();
        this.transform = new Transform();
        this.overlaps = new KeyValuePair();
    }

    doesOverlap(other) {
        return Intersect.intersects(this, other);
    }

    static doesOverlap(first, second) {
        return Intersect.intersects(first, second);
    }
}