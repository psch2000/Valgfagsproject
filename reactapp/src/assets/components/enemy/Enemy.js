import { Component } from "../../../base/baseStructor/Component";
import { Vector2d } from "../../../base/baseStructor/Vector2d";
import { PlayerBase } from "../PlayerBase";
import { RectangleCollider } from "../../../base/baseStructor/collider/RectangleCollider";
import { Player } from "../bank/Player";
import { DrawIcon } from "../../../base/baseStructor/DrawIcon";
import { Collider } from "../../../base/baseStructor/collider/Collider";
import { AudioManager } from "../../../sound/AudioManager";
import { randomInt } from "../../app/functions/randomInt";
import { enemyTypesImagePaths } from "./EnemyTypes";

export class Enemy extends Component {
    static count = 0;

    constructor(health, releaseFunction, callbackFunctionWhenDead) {
        super();
        this.startHealth = health;
        this.currentHealth = health;
        this.damage = health; // damage is just equal to the current health of the enemy
        this.releaseFunction = releaseFunction;
        this.callbackFunctionWhenDead = callbackFunctionWhenDead;

        this.id = Enemy.count;
        Enemy.count += 1;
    }

    onStart() {
        this.updateIcon();
    }

    updateIcon() {
        this.parent.getComponent(DrawIcon).img.src = enemyTypesImagePaths[this.currentHealth - 1];
    }

    isDead() {
        return this.currentHealth <= 0;
    }

    onEnter(other) {
        if (other.name !== "playerBase") return;

        let playerBase = other.getComponent(PlayerBase);

        this.attack(playerBase);
    }

    takeDamage(incomingDamage) {
        this.currentHealth -= incomingDamage;

        // update damage to be current health
        this.damage = this.currentHealth;

        this.updateIcon();

        Player.bank.add(incomingDamage);

        if (this.isDead()) this.#destroy();
    }

    attack(other) {
        other.takeDamage(this.damage);

        this.#destroy();
    }

    getCenterPosition() {
        let collider = this.parent.getComponent(Collider);

        let offsetX = collider instanceof RectangleCollider ? collider.width / 2 : 0;
        let offsetY = collider instanceof RectangleCollider ? collider.height / 2 : 0;

        return Vector2d.add(this.transform.position, new Vector2d(offsetX, offsetY));
    }

    #destroy() {
        this.currentHealth = 0;
        this.callbackFunctionWhenDead();
        var rand = randomInt(1, 4);
        AudioManager.play('pop' + rand);
        this.releaseFunction(this.parent);
    }
}
