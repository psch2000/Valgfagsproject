export class Vector2d {
    constructor(posX, posY) {
        this.x = posX;
        this.y = posY;
    }
    
    static distance(first, second) {
        return Math.sqrt(Math.pow(second.x - first.x, 2) + Math.pow(second.y - first.y, 2));
    }

    // distanceTo(other) {
    //     return Vector2d.distance(this, other);
    // }

    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    normalize() {
        let length = this.length();
        return new Vector2d(this.x / length, this.y / length);
    }

    static add(first, second) {
        return new Vector2d(first.x + second.x, first.y + second.y);
    }

    static substract(first, second) {
        return new Vector2d(first.x - second.x, first.y - second.y);
    }
    
    static multiply(first, second) {
        return new Vector2d(first.x * second.x, first.y * second.y);
    }

    static divide(first, second) {
        return new Vector2d(first.x / second.x, first.y / second.y);
    }

    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
}