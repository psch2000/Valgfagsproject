import { Component } from "../../../base/baseStructor/Component";
import { App } from "../../app/App";
import { Vector2d } from "../../../base/baseStructor/Vector2d";
import { PlayerBase } from "../PlayerBase";
import { Time } from "../../../base/Time";
import { RectangleCollider } from "../../../base/baseStructor/collider/RectangleCollider";
import { AudioManager } from "../../../sound/AudioManager";
import { random } from "../../app/functions/random";
import { randomInt } from "../../app/functions/randomInt";

export class Enemy extends Component {
    static count = 0;

    constructor(health, damage, attackRange) {
        super();
        this.health = health;
        this.damage = damage;
        this.attackRange = attackRange;

        this.baseToAttack = null;

        // cooldown in seconds
        this.cooldownAttack = 2;

        this.time = 0;

        this.#resetAttackCooldown();

        this.id = Enemy.count;
        Enemy.count += 1;
    }

    isDead() {
        return this.health <= 0;
    }

    onUpdate() {
        this.#getBaseToAttack();
        this.#tryAttack();
    }

    #tryAttack() {
        if (this.baseToAttack == null) return;

        if (this.baseToAttack.isDead()) {
            this.baseToAttack = null;
            return;
        }

        // time since last attack
        this.time += Time.deltaTime;

        // if still in cooldown
        if (this.time < this.cooldownAttack) return;

        // if not in range of baseToAttack
        if (!this.#inAttackRange()) return;

        this.attack(this.baseToAttack);
    }

    #inAttackRange() {
        return Vector2d.distance(this.transform.position, this.baseToAttack.transform.position) < this.attackRange;
    }

    #resetAttackCooldown() {
        this.time = 0;
    }

    #getBaseToAttack() {
        if (this.baseToAttack !== null) return;

        this.baseToAttack = App.game.getComposit("playerBase")?.getComponent(PlayerBase);
    }

    takeDamage(incomingDamage) {
        this.health -= incomingDamage;

        if (this.isDead()) this.#destroy();
    }

    attack(other) {
        other.takeDamage(this.damage);
        this.#resetAttackCooldown();

        this.#destroy();
    }

    getCenterPosition() {
        let rectangleCollider = this.parent.getComponent(RectangleCollider);

        return Vector2d.add(this.transform.position, new Vector2d(rectangleCollider.width / 2, rectangleCollider.height / 2));
    }

    #destroy() {
        var rand = randomInt(1, 4);
        // console.log('pop' + rand);
        AudioManager.play('pop' + rand);
        this.health = 0;
        App.game.removeComposit(this.parent);
    }
}
