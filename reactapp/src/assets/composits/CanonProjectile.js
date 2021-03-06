import { Projectile } from "./Projectile";
import { MoveDirection } from "../components/MoveDirection";
import { Vector2d } from "../../base/baseStructor/Vector2d";

// this projectile is simalar to the normal projectile, which
// spawns a projectile that follows a strait path, but this
// projectile dos not get destroyed when colliding with an enemy
export class CanonProjectile extends Projectile {
    constructor(radius, imagepath, damage, releaseFunction, useRotate = false) {
        super(radius, imagepath, damage, releaseFunction, false, useRotate);
        this.tower = null;

        this.addComponent(new MoveDirection(new Vector2d(0, 0), 1));
    }

    calculateBehavior(speed, direction, tower) {
        let moveComponent = this.getComponent(MoveDirection);
        moveComponent.speed = speed;
        moveComponent.direction = direction;
        this.tower = tower;
    }
}