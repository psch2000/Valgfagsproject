import { Component } from "../../base/baseStructor/Component";

export class DamageWhenCollide extends Component {
    constructor(classToCollide, damage, releaseFunction) {
        super();
        this.classToCollide = classToCollide;
        this.damage = damage;
        this.releaseFunction = releaseFunction;
    }

    onEnter(other) {
        if (this.classToCollide == null || this.damage == null) return;

        let compositToAttack = other.getComponent(this.classToCollide);

        if (compositToAttack === null) return;

        // console.log("projectile damages " + this.classToCollide.name + ": " + this.damage);
        compositToAttack.takeDamage(this.damage);

        this.releaseFunction(this.parent);
    }
}
