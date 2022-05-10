import { Component } from "../../base/baseStructor/Component";
import { App } from "../app/App";
import { Unplaceable } from "../tower/firePattern/Unplaceable";



export class PlayerBase extends Component {
    // the base that the player should protect
    constructor(health) {
        super();
        this.health = health;

    }

    isDead() {
        return this.health <= 0;
    }

    takeDamage(damage) {
        console.log("PlayerBase is taking damage: " + damage);
        this.health -= damage;

        if (this.isDead()) {
            console.log("PLAYER BASE DEAD");
            App.game.removeComposit(this.parent);
        }
    }
}
