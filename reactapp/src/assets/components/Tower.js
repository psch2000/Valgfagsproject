import { Component } from "../../base/baseStructor/Component";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { getCanvasMousePosition } from "../app/functions/getCanvasMousePosition";
import { ProjectilePool } from "../pools/ProjectilePool";

export class Tower extends Component {
    constructor(towerType) {
        super();
        this.towerType = towerType;

        this.cooldownShoot = 2;
        this.oldTime = new Date();
    }

    onUpdate() {
        let timeDiff = (new Date().getTime() - this.oldTime.getTime()) / 1000;

        if (timeDiff >= this.cooldownShoot) {
            this.#resetCooldown();

            var from = this.transform.position;
            var to = getCanvasMousePosition();

            var direction = Vector2d.subtract(to, from).normalize();

            // ProjectilePool.getInstance().color = this.towerType.color;
            var instance = ProjectilePool.getInstance().acquireReuseable(this.towerType.color);
            instance.transform.position = this.transform.position.copy();

            instance.getComponent("MoveDirection").direction = direction;
        }
    }

    #resetCooldown() {
        this.oldTime = new Date();
    }
}
