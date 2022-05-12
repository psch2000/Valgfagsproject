import { Component } from "../../../base/baseStructor/Component";
import { Vector2d } from "../../../base/baseStructor/Vector2d";

export class FollowPath extends Component {
    constructor(path, speed = 1) {
        super();
        this.waypoints = [...path.waypoints];
        this.speed = speed;
    }

    onUpdate() {
        this.#moveOnPath();
    }

    #moveOnPath() {
        if (this.waypoints.length === 0) return;

        if (Vector2d.distance(this.transform.position, this.waypoints[0]) < 1) {
            this.waypoints.shift();
            // console.log("next waypoint in path"); // debug
            return;
        }

        let moveDirection = Vector2d.subtract(this.waypoints[0], this.transform.position).normalize();
        let moveAmount = Vector2d.multiply(moveDirection, new Vector2d(this.speed, this.speed));

        this.transform.translate(moveAmount);
    }
}
