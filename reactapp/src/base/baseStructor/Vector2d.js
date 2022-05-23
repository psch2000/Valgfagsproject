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
        var vec = new Vector2d(this.x / length, this.y / length);
        return vec;
    }

    equals(other) {
        return this.x === other.x && this.y === other.y;
    }

    // distanceTo(other) {
    //     return Vector2d.distance(this, other);
    // }

    getAngle() {
        // from https://stackoverflow.com/a/35271543/12276054
        var angle = Math.atan2(this.y, this.x);
        var degrees = (180 * angle) / Math.PI;
        return ((360 + Math.round(degrees)) % 360);
    }

    reverse() {
        return new Vector2d(-this.x, -this.y);
    }

    copy() {
        return new Vector2d(this.x, this.y);
    }

    add(other) {
        return Vector2d.add(this, other);
    }

    addNum(number) {
        return Vector2d.addNum(this, number);
    }

    addNumbers(numberX, numberY) {
        return Vector2d.addNumbers(this, numberX, numberY);
    }

    subtract(other) {
        return Vector2d.subtract(this, other);
    }

    subtractNum(number) {
        return Vector2d.subtractNum(this, number);
    }

    subtractNumbers(numberX, numberY) {
        return Vector2d.subtractNumbers(this, numberX, numberY);
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }

    static distance(first, second) {
        // sqrt((s.x - f.x)^2 + (s.y - f.y)^2)
        return Math.sqrt(Math.pow(second.x - first.x, 2) + Math.pow(second.y - first.y, 2));
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

    static addNum(vector, number) {
        return new Vector2d(vector.x + number, vector.y + number);
    }

    static addNumbers(vector, numberX, numberY) {
        return new Vector2d(vector.x + numberX, vector.y + numberY);
    }

    static subtractNum(vector, number) {
        return new Vector2d(vector.x - number, vector.y - number);
    }

    static subtractNumbers(vector, numberX, numberY) {
        return new Vector2d(vector.x - numberX, vector.y - numberY);
    }

    static multiplyNum(vector, number) {
        return new Vector2d(vector.x * number, vector.y * number);
    }

    static divideNum(vector, number) {
        return new Vector2d(vector.x / number, vector.y / number);
    }

    rotate(ang) {
        var rad = ang * (Math.PI / 180);
        var cos = Math.cos(rad);
        var sin = Math.sin(rad);

        var x = this.x;
        var y = this.y;

        this.x = x * cos - y * sin;
        this.y = x * sin + y * cos;

        return new Vector2d(this.x, this.y);
    }

    static right = new Vector2d(1, 0);
    static left = new Vector2d(-1, 0);
    static down = new Vector2d(0, 1);
    static up = new Vector2d(0, -1);
    static zero = new Vector2d(0, 0);
    static one = new Vector2d(1, 1);
}
