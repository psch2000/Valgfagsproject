import { Component } from "../../../base/baseStructor/Component";
import { App } from "../../app/App";
import { Vector2d } from "../../../base/baseStructor/Vector2d";

export class Enemy extends Component {
    constructor(health, damage, attackRange) {
        super();
        this.health = health;
        this.damage = damage;
        this.attackRange = attackRange;

        this.baseToAttack = null;

        // cooldown in seconds
        this.cooldownAttack = 2;

        this.#resetAttackCooldown();
    }

    isDead() {
        return this.health <= 0;
    }

    onUpdate() {
        this.#tryAttack();
    }

    #tryAttack() {
        if (this.baseToAttack === null) {
            this.baseToAttack = App.game.getComposit("playerBase")?.getComponent("PlayerBase");
        };

        if (this.baseToAttack.isDead()) {
            this.baseToAttack = null;
            console.log("baseToAttack is dead!");
        };

        let timeDiffCooldown = (new Date().getTime() - this.oldTime.getTime()) / 1000;

        // if still in cooldown
        if (timeDiffCooldown < this.cooldownAttack) return;

        // if not in range of baseToAttack
        if (!this.#inAttackRange()) return;

        this.#resetAttackCooldown();
        this.attack(this.baseToAttack);
    }

    #inAttackRange() {
        return Vector2d.distance(this.transform.position, this.baseToAttack.transform.position) < this.attackRange;
    }

    #resetAttackCooldown() {
        this.oldTime = new Date();
    }

    takeDamage(incomingDamage) {
        this.health -= incomingDamage;
    }

    attack(other) {
        other.takeDamage(this.damage);
    }
}
