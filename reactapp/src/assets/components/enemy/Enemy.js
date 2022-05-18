import { Component } from "../../../base/baseStructor/Component";
import { App } from "../../app/App";
import { Vector2d } from "../../../base/baseStructor/Vector2d";
import { PlayerBase } from "../PlayerBase";
import { Time } from "../../../base/Time";
import { RectangleCollider } from "../../../base/baseStructor/collider/RectangleCollider";
import { Player } from "../bank/Player";
import { DrawIcon } from "../../../base/baseStructor/DrawIcon";
import { TackShooterFirePatternBuilder } from "../../tower/firePattern/patterns/TackShooterFirePatternBuilder";
import { CircleCollider } from "../../../base/baseStructor/collider/CircleCollider";

export class Enemy extends Component {
    static count = 0;

    constructor(health, damage, attackRange) {
        super();
        this.startHealth = health;
        this.currentHealth = health;
        this.damage = damage;
        this.attackRange = attackRange;
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
        
        this.baseToAttack = null;

        // cooldown in seconds
        this.cooldownAttack = 2;

        this.time = 0;

        this.#resetAttackCooldown();

        this.id = Enemy.count;
        Enemy.count += 1;
    }

    onStart(){
        this.parent.getComponent(DrawIcon).img.src = this.imagePaths[this.currentHealth-1];
    }

    isDead() {
        return this.currentHealth <= 0;
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
        
        this.currentHealth -= incomingDamage;
        
        let drawIconComponent = this.parent.getComponent(DrawIcon);
        
        drawIconComponent.img.src = this.imagePaths[this.currentHealth-1];

        Player.bank.add(1);
        
        if (this.isDead()) this.#destroy();
    }

    attack(other) {
        this.damage = this.currentHealth;
        other.takeDamage(this.damage);
        this.#resetAttackCooldown();

        this.#destroy();
    }

    getCenterPosition() {


        let collider = this.parent.getComponent(RectangleCollider) ? this.parent.getComponent(RectangleCollider) : this.parent.getComponent(CircleCollider);

        let width = collider.constructor.name === "RectangleCollider" ? collider.width : collider.radius;
        let height = collider.constructor.name === "RectangleCollider" ? collider.height : collider.radius;
        
        return Vector2d.add(this.transform.position, new Vector2d(width / 2, height / 2));
    }

    #destroy() {
        this.currentHealth = 0;
        App.game.removeComposit(this.parent);
    }
}
