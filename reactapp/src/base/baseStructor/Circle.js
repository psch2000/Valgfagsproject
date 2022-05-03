import { Vector2d } from "./Vector2d";

export class Circle {
    constructor(x, y, radius) {
        this.position = new Vector2d(x, y);
        this.radius = radius;
    }

    static doesOverlap(first, second) {
        // code inspired from https://stackoverflow.com/a/8367547/12276054

        let deltaDistanceFromCenterSquared =
            Math.pow(first.position.x - second.position.x, 2) +
            Math.pow(first.position.y - second.position.y, 2);

        return (
            deltaDistanceFromCenterSquared <=
            Math.pow(first.radius + second.radius, 2)
        );
    }
}
