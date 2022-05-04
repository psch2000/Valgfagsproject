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
        this.oldTime = new Date();
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
        }

        if (this.baseToAttack.isDead()) {
            this.baseToAttack = null
            console.log("baseToAttack is dead!")
        };

        let timeDiff = (new Date().getTime() - this.oldTime.getTime()) / 1000;

        // if still in cooldown
        if (timeDiff < this.cooldownAttack) return;
        // if not in range of baseToAttack
        if (Vector2d.distance(this.transform.position, this.baseToAttack.transform.position) > this.attackRange) return;
        
        this.oldTime = new Date();
        this.attack(this.baseToAttack);
    }

    takeDamage(incomingDamage) {
        this.health -= incomingDamage;
    }

    attack(other) {
        other.takeDamage(this.damage);
    }
}
