import { Vector2d } from "./Vector2d";

export class Rectangle {
    constructor(x, y, width, height) {
        this.position = new Vector2d(x, y);
        this.width = width;
        this.height = height;
    }

    isPointInBounds(point){
        let firstLeft = this.position.x;
        let firstRight = this.position.x + this.width;
        let firstTop = this.position.y;
        let firstBottom = this.position.y + this.height;

        return(
            point.x > firstLeft &&
            point.x < firstRight &&
            point.y > firstTop &&
            point.y < firstBottom
        );
        
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
