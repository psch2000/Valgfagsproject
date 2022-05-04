import { Component } from "../../../base/baseStructor/Component";

export class Enemy extends Component {
    constructor(health, speed, damage) {
        super();
        this.health = health;
        this.speed = speed;
        this.damage = damage;
    }

    onUpdate() {
        
    }

    takeDamage(incomingDamage) {
        this.health -= incomingDamage;
    }

    attack(other) {
        console.log("Enemy attacks: " + other.constructor.name);
        other.takeDamage(this.damage);
    }
}