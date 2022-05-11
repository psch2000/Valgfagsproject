import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { Composit } from "../../base/baseStructor/Composit";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { instantiate } from "../app/functions/instantiate";
import { OutOfBounceDelete } from "../components/OutOfBounceDelete";
import { CircleRenderer } from "../components/CircleRenderer";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { MoveDirection } from "../components/MoveDirection";
import { SquareRenderer } from "../components/SquareRenderer";
import { DamageWhenCollide } from "../components/DamageWhenCollide";
import { Enemy } from "../components/enemy/Enemy";
import { NormalProjectile } from "../composits/NormalProjectile";


export class ProjectilePool extends ReuseablePool{

    static #instance;
    constructor(){
        if (ProjectilePool.#instance !== undefined) return;
        super();
        this.radius = 5;
    }

    static getInstance() {

        if (this.#instance === undefined){
            this.#instance = new ProjectilePool();
        }

        return this.#instance;
    }

    acquireReuseable(color, damage, projectileType = NormalProjectile){
        let reuseable = this.#getReuseableWithColor(color, projectileType);
        
        if (reuseable === null) return this.makeReuseable(color, damage, projectileType);

        reuseable.getComponent(DamageWhenCollide).damage = damage;

        reuseable.isActive = true;
        return reuseable;
    }

    makeReuseable(color, damage, projectileType) {
        // console.log("constructing a projectile of type: " + projectileType.name)
        let c = new projectileType(this.radius, color, damage, this.releaseReuseable);

        return instantiate(c);
    }

    #getReuseableWithColor(color, projectileType) {
        for (let index = 0; index < this._reuseables.length; index++) {
            const reuseable = this._reuseables[index];

            if (projectileType !== null && reuseable instanceof projectileType && reuseable.getComponent(CircleRenderer).color === color) {
                this._reuseables.splice(index, 1);
                return reuseable;
            }

            if (projectileType === null && reuseable.getComponent(CircleRenderer).color === color) {
                this._reuseables.splice(index, 1);
                return reuseable;
            }
        }

        return null;
    }

}