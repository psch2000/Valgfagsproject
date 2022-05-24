import { Vector2d } from "../../base/baseStructor/Vector2d";
import { MovePath } from "../components/MovePath";
import { getAnglesEquallySpaces, getPointsOnCircleCircumference } from "../../base/baseStructor/CircleFunctions";
import { Projectile } from "./Projectile";

// this projectile spawns a projectile which
// follows a circular path, and dosent get destroyed on impact with balls
export class BoomerangProjectile extends Projectile {
    constructor(radius, imagepath, damage, releaseFunction, useRotate = false) {
        super(radius, imagepath, damage, releaseFunction, false, useRotate);
        this.tower = null;

        this.addComponent(new MovePath(new Vector2d(0, 0), 1, releaseFunction));
    }

    calculateBehavior(speed, direction, tower) {
        let moveComponent = this.getComponent(MovePath);
        moveComponent.speed = speed;
        moveComponent.direction = direction;

        let circleOffset = Vector2d.multiplyNum(direction, tower.towerType.range / 2);
        let circleCenter = Vector2d.add(tower.transform.position, circleOffset);

        let numAngles = 40;
        let angles = getAnglesEquallySpaces(numAngles, false);
        let points = getPointsOnCircleCircumference(circleCenter, tower.towerType.range / 2, angles, tower.transform.position, direction);

        points.push(tower.transform.position);

        moveComponent.path = points;
    }
}
