import { Component } from "../../../base/baseStructor/Component";
import { App } from "../../app/App";
import { Vector2d } from "../../../base/baseStructor/Vector2d";
import { PlayerBase } from "../PlayerBase";
import { Time } from "../../../base/Time";
import { RectangleCollider } from "../../../base/baseStructor/collider/RectangleCollider";
import { Player } from "../bank/Player";
import { DrawIcon } from "../../../base/baseStructor/DrawIcon";
import { TackShooterFirePatternBuilder } from "../../tower/firePattern/patterns/TackShooterFirePatternBuilder";
import { Collider } from "../../../base/baseStructor/collider/Collider";

export class Enemy extends Component {
    static count = 0;

    constructor(health, callbackFunctionWhenDead) {
        super();
        this.startHealth = health;
        this.currentHealth = health;
        this.damage = health; // damage is just equal to the current health of the enemy
        this.callbackFunctionWhenDead = callbackFunctionWhenDead;

        this.imagePaths = [
            "./images/sprite_ball_red.png",
            "./images/sprite_ball_blue.png",
            "./images/sprite_ball_green.png",
            "./images/sprite_ball_yellow.png",
            "./images/sprite_ball_pink.png",
            "./images/sprite_ball_black.png",
            "./images/sprite_ball_purple.png",
            "./images/sprite_ball_white.png"
        ];

        this.id = Enemy.count;
        Enemy.count += 1;
    }

    onStart(){
        this.parent.getComponent(DrawIcon).img.src = this.imagePaths[this.currentHealth-1];
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

        let drawIconComponent = this.parent.getComponent(DrawIcon);

        drawIconComponent.img.src = this.imagePaths[this.currentHealth-1];

        Player.bank.add(1);

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
        App.game.removeComposit(this.parent);
    }
}
