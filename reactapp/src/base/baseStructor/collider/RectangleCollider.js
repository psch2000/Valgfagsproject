import { Collider } from "./Collider";

export class RectangleCollider extends Collider {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
