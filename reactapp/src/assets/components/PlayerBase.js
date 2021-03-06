import { EventHandler } from "../../base/baseBehaviour/EventHandler";
import { Component } from "../../base/baseStructor/Component";
import { App } from "../app/App";

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
        this.health -= damage;

        if (this.isDead()) {
            this.onSetHealth.invoke();
            this.health = 0;

            App.game.removeComposit(this.parent);
        }

        this.onSetHealth.invoke();
    }
}
