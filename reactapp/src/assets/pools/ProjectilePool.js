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
        if (ProjectilePool.#instance != null) return;
        super();
        this.color = 'white';
    }

    static getInstance() {

        if (this.#instance == null){
            this.#instance = new ProjectilePool();
        }

        return this.#instance;
    }


    makeReuseable() {
        let radius = 5;

        var c = new Composit("projectile");
        c.addComponent(new CircleRenderer(radius, this.color, false));
        c.addComponent(new MoveDirection(new Vector2d(0,0), 1));
        c.addComponent(new CircleCollider(radius))
        c.addComponent(new OutOfBounceDelete(this.releaseReuseable));
        return instantiate(c);
    }

}