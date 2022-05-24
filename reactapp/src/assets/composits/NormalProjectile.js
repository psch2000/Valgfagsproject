import { Vector2d } from "../../base/baseStructor/Vector2d";
import { MoveDirection } from "../components/MoveDirection";
import { Projectile } from "./Projectile";

export class NormalProjectile extends Projectile {
    constructor(radius, imagepath, damage, releaseFunction, useRotate = false) {
        super(radius, imagepath, damage, releaseFunction, true, useRotate);
        this.tower = null;

        this.addComponent(new MoveDirection(new Vector2d(0, 0), 1));
    }

    calculateBehavior(speed, direction, tower) {
        let moveComponent = this.getComponent(MoveDirection);
        moveComponent.speed = speed;
        moveComponent.direction = direction;
    }
}
