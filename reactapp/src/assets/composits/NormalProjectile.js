import { Composit } from "../../base/baseStructor/Composit";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { CircleRenderer } from "../components/CircleRenderer";
import { MoveDirection } from "../components/MoveDirection";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { OutOfBounceDelete } from "../components/OutOfBounceDelete";
import { DamageWhenCollide } from "../components/DamageWhenCollide";
import { Enemy } from "../components/enemy/Enemy";
import { DrawIcon } from "../../base/baseStructor/DrawIcon";

export class NormalProjectile extends Composit {
    constructor(radius, imagepath, damage, releaseFunction) {
        super("projectile");
        this.tower = null;
        //this.addComponent(new CircleRenderer(radius, color, false));
        this.addComponent(new DrawIcon(imagepath, true))
        this.addComponent(new MoveDirection(new Vector2d(0, 0), 1));
        this.addComponent(new CircleCollider(radius));
        this.addComponent(new OutOfBounceDelete(releaseFunction));
        this.addComponent(new DamageWhenCollide(Enemy, damage, releaseFunction));

        console.log(NormalProjectile)
    }

    calculateBehavior(speed, direction, tower) {
        let moveComponent = this.getComponent(MoveDirection);
        moveComponent.speed = speed;
        moveComponent.direction = direction;
        this.tower = tower;
    }
}
