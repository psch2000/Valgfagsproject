import { Composit } from "../../base/baseStructor/Composit";
import { OutOfBounceDelete } from "../components/OutOfBounceDelete";
import { DrawIcon } from "../../base/baseStructor/DrawIcon";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { DamageWhenCollide } from "../components/DamageWhenCollide";
import { Enemy } from "../components/enemy/Enemy";

export class Projectile extends Composit {
    #radius;

    constructor(radius, imagepath, damage, releaseFunction, useRelease, useRotate = false) {
        super("projectile");

        if (this.constructor === Projectile) throw new Error("Can't construct an abstract class");

        this.addComponent(new OutOfBounceDelete(releaseFunction));
        this.addComponent(new DamageWhenCollide(Enemy, damage, releaseFunction, useRelease));
        //this.addComponent(new CircleRenderer(radius, color, false));
        this.addComponent(new DrawIcon(imagepath, true, useRotate));
        this.addComponent(new CircleCollider(radius));
        this.#radius = radius;
    }

    setRadius(value) {
        // this.getComponent(CircleRenderer).radius = value;
        this.getComponent(CircleCollider).radius = value;
        this.#radius = value;
    }

    getRadius() {
        return this.#radius;
    }

    calculateBehavior(speed, direction, tower) {
        throw new Error("method 'calculateBehavior' is not implemented.");
    }
}
