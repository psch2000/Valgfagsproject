import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { instantiate } from "../app/functions/instantiate";
import { DamageWhenCollide } from "../components/DamageWhenCollide";
import { DrawIcon } from "../../base/baseStructor/DrawIcon";

export class ProjectilePool extends ReuseablePool {
    static #instance;
    constructor() {
        if (ProjectilePool.#instance !== undefined) return;
        super();
        this.radius = 10;
    }

    static getInstance() {
        if (this.#instance === undefined) {
            this.#instance = new ProjectilePool();
        }

        return this.#instance;
    }

    acquireReuseable(imagepath, damage, projectileType, rotateProjectile) {
        let reuseable = this.#getReuseableWithImage(imagepath, projectileType);

        if (reuseable === null) return this.makeReuseable(imagepath, damage, projectileType, rotateProjectile);

        reuseable.getComponent(DamageWhenCollide).damage = damage;

        reuseable.isActive = true;
        return reuseable;
    }

    makeReuseable(imagepath, damage, projectileType, rotateProjectile) {
        // console.log("constructing a projectile of type: " + projectileType.name)
        let c = new projectileType(this.radius, imagepath, damage, this.releaseReuseable, rotateProjectile);

        return instantiate(c);
    }

    #getReuseableWithImage(imagepath, projectileType) {
        for (let index = 0; index < this._reuseables.length; index++) {
            const reuseable = this._reuseables[index];

            if (projectileType !== null && reuseable instanceof projectileType && reuseable.getComponent(DrawIcon).img.src === imagepath) {
                this._reuseables.splice(index, 1);
                return reuseable;
            }

            if (projectileType === null && reuseable.getComponent(DrawIcon).img.src === imagepath) {
                this._reuseables.splice(index, 1);
                return reuseable;
            }
        }

        return null;
    }
}
