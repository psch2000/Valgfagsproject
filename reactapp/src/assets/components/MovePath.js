import { App } from "../app/App";
import { Move } from "./Move";
import { Vector2d } from "../../base/baseStructor/Vector2d";

export class MovePath extends Move {
    constructor(direction, speed, releaseFunction) {
        super(direction, speed);
        this.releaseFunction = releaseFunction;
        this.path = [];
    }

    onUpdate() {
        if (this.path === null) return;

        if (this.path.length === 0) {
            // release parent
            this.releaseFunction(this.parent);
            return;
        }

        this.#move();
    }

    #move() {
        if (Vector2d.distance(this.transform.position, this.path[0]) < 1) {
            this.path.shift();
            // console.log("next waypoint in path"); // debug
            return;
        }

        let moveDirection = Vector2d.subtract(this.path[0], this.transform.position).normalize();
        let moveAmount = Vector2d.multiply(moveDirection, new Vector2d(this.speed, this.speed));

        this.transform.translate(moveAmount);
    }

    // setPath(newPath) {
    //     this.path = newPath;
    // }
}