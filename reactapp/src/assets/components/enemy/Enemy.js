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
        this.#getBaseToAttack();
        this.#tryAttack();
    }

    #tryAttack() {
        if (this.baseToAttack === null) return;

        if (this.baseToAttack.isDead()) {
            this.baseToAttack = null;
            return;
        }

        // time since last attack
        let timeDiffCooldown = (new Date().getTime() - this.oldAttackTime.getTime()) / 1000;

        // if still in cooldown
        if (timeDiffCooldown < this.cooldownAttack) return;

        // if not in range of baseToAttack
        if (!this.#inAttackRange()) return;

        this.attack(this.baseToAttack);
    }

    #inAttackRange() {
        return Vector2d.distance(this.transform.position, this.baseToAttack.transform.position) < this.attackRange;
    }

    #resetAttackCooldown() {
        this.oldAttackTime = new Date();
    }

    #getBaseToAttack() {
        if (this.baseToAttack !== null) return;

        this.baseToAttack = App.game.getComposit("playerBase")?.getComponent("PlayerBase");
    }

    takeDamage(incomingDamage) {
        this.health -= incomingDamage;
    }

    attack(other) {
        other.takeDamage(this.damage);
        this.#resetAttackCooldown();

        App.game.removeComposit(this.parent);
    }
}
