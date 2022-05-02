export class Vector2d {


    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    normalize() {
        let length = this.length();
        return new Vector2d(this.x / length, this.y / length);
    }

    equals(other) {
        return this.x === other.x && this.y === other.y;
    }

    // distanceTo(other) {
    //     return Vector2d.distance(this, other);
    // }

    static distance(first, second) {
        // sqrt((s.x - f.x)^2 + (s.y - f.y)^2)
        return Math.sqrt(
            Math.pow(second.x - first.x, 2) + Math.pow(second.y - first.y, 2)
        );
    }

    static add(first, second) {
        return new Vector2d(first.x + second.x, first.y + second.y);
    }

    static subtract(first, second) {
        return new Vector2d(first.x - second.x, first.y - second.y);
    }

    static multiply(first, second) {
        return new Vector2d(first.x * second.x, first.y * second.y);
    }

    static divide(first, second) {
        return new Vector2d(first.x / second.x, first.y / second.y);
    }


    
    static right = new Vector2d(1, 0);
    static left = new Vector2d(-1, 0);
    static down = new Vector2d(0, 1);
    static up = new Vector2d(0, -1);



}
