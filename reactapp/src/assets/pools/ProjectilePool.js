import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { Composit } from "../../base/baseStructor/Composit";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { instantiate } from "../app/functions/instantiate";
import { OutOfBounceDelete } from "../components/OutOfBounceDelete";
import { CircleRenderer } from "../components/CircleRenderer";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { MoveDirection } from "../components/MoveDirection";
import { SquareRenderer } from "../components/SquareRenderer";
import { TowerPlacere } from "../components/TowerPlacer";




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

    acquireReuseable(color){
        let reuseable = this.#getReuseableWithColor(color);
        
        if (reuseable === null) return this.makeReuseable(color);

        reuseable.isActive = true;
        return reuseable;
    }

    makeReuseable(color) {
        var c = new Composit("projectile");
        c.addComponent(new CircleRenderer(this.radius, color, false));
        c.addComponent(new MoveDirection(new Vector2d(0,0), 1));
        c.addComponent(new CircleCollider(this.radius))
        c.addComponent(new OutOfBounceDelete(this.releaseReuseable));
        return instantiate(c);
    }

    #getReuseableWithColor(color) {
        for (let index = 0; index < this._reuseables.length; index++) {
            const reuseable = this._reuseables[index];
            
            if (reuseable.getComponent("CircleRenderer").color === color) {
                this._reuseables.splice(index, 1);
                return reuseable;
            }
        }

        return null;
    }

}