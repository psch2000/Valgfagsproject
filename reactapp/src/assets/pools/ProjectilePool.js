import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { Composit } from "../../base/baseStructor/Composit";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { Game } from "../app/App";
import { instantiate } from "../app/functions/instantiate";
import { CircleRenderer } from "../components/CircleRenderer";
import { MoveDirection } from "../components/MoveDirection";
import { SquareRenderer } from "../components/SquareRenderer";




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

    makeReuseable(){


        var c = new Composit();
        c.addComponent(new CircleRenderer(5, this.color, false));
        c.addComponent(new MoveDirection(new Vector2d(0,0), 1));
        return instantiate(c);
    }

}