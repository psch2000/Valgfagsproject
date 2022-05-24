import { Vector2d } from "../../base/baseStructor/Vector2d";
import { MovePath } from "../components/MovePath";
import { getAnglesEquallySpaces, getPointsOnCircleCircumference } from "../../base/baseStructor/CircleFunctions";
import { Projectile } from "./Projectile";

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

        // add tower's position to be the last point the boomerang projectile moves to
        points.push(tower.transform.position);

        // let colors = ["#ff0000", "#00ff00", "#0000ff", "yellow", "black"];

        // // visualizing points
        // points.forEach((point) => {
        //     let composit = new Composit("testCirclePoint");
        //     composit.addComponent(new CircleRenderer(3, colors[this.testIndex], false));
        //     composit.transform.position = point;
        //     instantiate(composit);
        // });

        moveComponent.path = points;
    }
}
