import { Composit } from "../../base/baseStructor/Composit";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { CircleRenderer } from "../components/CircleRenderer";
import { MoveDirection } from "../components/MoveDirection";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { OutOfBounceDelete } from "../components/OutOfBounceDelete";
import { DamageWhenCollide } from "../components/DamageWhenCollide";
import { Enemy } from "../components/enemy/Enemy";
import { DrawIcon } from "../../base/baseStructor/DrawIcon";
import { Projectile } from "./Projectile";

export class NormalProjectile extends Projectile {
    constructor(radius, imagepath, damage, releaseFunction, useRotate = false) {
        super(radius, imagepath, damage, releaseFunction, useRotate);
        this.tower = null;

        this.addComponent(new MoveDirection(new Vector2d(0, 0), 1));
    }

    setRadius(value){
        this.getComponent(CircleRenderer).radius = value;
        this.getComponent(CircleCollider).radius = value;
    }

    calculateBehavior(speed, direction, tower) {
        let moveComponent = this.getComponent(MoveDirection);
        moveComponent.speed = speed;
        moveComponent.direction = direction;
        this.tower = tower;
    }
}
