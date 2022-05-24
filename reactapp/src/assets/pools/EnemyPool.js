import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { Composit } from "../../base/baseStructor/Composit";
import { DrawIcon } from "../../base/baseStructor/DrawIcon";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { FollowPath } from "../components/enemy/FollowPath";
import { instantiate } from "../app/functions/instantiate";
import { enemyTypesHealth } from "../components/enemy/EnemyTypes";
import { Enemy } from "../components/enemy/Enemy";

export class EnemyPool extends ReuseablePool {
    static #instance;

    constructor() {
        if (EnemyPool.#instance !== undefined) return;
        super();
        this.colliderRadius = 15;
    }

    static getInstance() {
        if (this.#instance === undefined) {
            this.#instance = new EnemyPool();
        }

        return this.#instance;
    }

    acquireReuseable(enemyType, path, callbackFunctionWhenDead) {
        let reuseable = this.#getEnemyFromPool();

        if (reuseable === null) return this.makeReuseable(enemyType, path, callbackFunctionWhenDead);

        let enemyComponent = reuseable.getComponent(Enemy);
        enemyComponent.currentHealth = enemyTypesHealth[enemyType];
        enemyComponent.updateIcon();

        this.#setEnemyPositionToStartOfPath(reuseable, path);
        reuseable.getComponent(FollowPath).setPath(path);

        reuseable.isActive = true;
        return reuseable;
    }

    makeReuseable(enemyType, path, callbackFunctionWhenDead) {
        let enemyComposit = new Composit("enemy");
        enemyComposit.addComponent(new DrawIcon("", true));
        enemyComposit.addComponent(new CircleCollider(this.colliderRadius));
        enemyComposit.addComponent(new FollowPath(path, 1, true));
        enemyComposit.addComponent(getEnemy(enemyType, this.releaseReuseable, callbackFunctionWhenDead));
        this.#setEnemyPositionToStartOfPath(enemyComposit, path);
        instantiate(enemyComposit);
    }

    #getEnemyFromPool() {
        if (this._reuseables.length === 0) return null;

        return this._reuseables.pop();
    }

    #setEnemyPositionToStartOfPath(enemyComposit, path) {
        enemyComposit.transform.position = path.waypoints[0]
            .addNumbers(path.pathWidth / 2, 0)
            .subtractNumbers(0, path.pathWidth);
    }
}

function getEnemy(type, releaseFunction, callbackFunctionWhenDead) {
    let enemyHealth = enemyTypesHealth[type];
    return new Enemy(enemyHealth, releaseFunction, callbackFunctionWhenDead);
}
