import { Vector2d } from "./Vector2d";

export class Rectangle {
    constructor(x, y, width, height) {
        this.position = new Vector2d(x, y);
        this.width = width;
        this.height = height;
    }

    static doesOverlap(first, second) {
        let firstLeft = first.position.x;
        let firstRight = first.position.x + first.width;
        let firstTop = first.position.y;
        let firstBottom = first.position.y + first.height;

        let secondLeft = second.position.x;
        let secondRight = second.position.x + second.width;
        let secondTop = second.position.y;
        let secondBottom = second.position.y + second.height;

        return (
            firstLeft < secondRight &&
            firstRight > secondLeft &&
            firstTop < secondBottom &&
            firstBottom > secondTop
        );
    }
}
