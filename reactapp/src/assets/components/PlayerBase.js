import { EventHandler } from "../../base/baseBehaviour/EventHandler";
import { Component } from "../../base/baseStructor/Component";
import { App } from "../app/App";
import { Unplaceable } from "../tower/Unplaceable";

export class PlayerBase extends Component {
    // the base that the player should protect
    constructor(health) {
        super();
        this.health = health;
        this.onSetHealth = new EventHandler();
    }


    isDead() {
        return this.health <= 0;
    }

    takeDamage(damage) {
        console.log("PlayerBase is taking damage: " + damage);
        this.health -= damage;


        if (this.isDead()) {
            console.log(this.health)
            console.log("PLAYER BASE DEAD");
            this.onSetHealth.invoke();
            this.health = 0;

            App.game.removeComposit(this.parent);
        }

        this.onSetHealth.invoke();

    }
}
