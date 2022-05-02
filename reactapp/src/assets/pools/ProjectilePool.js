import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { Composit } from "../../base/baseStructor/Composit";
import { Game } from "../app/App";
import { MoveDirection } from "../components/MoveDirection";
import { SquareRenderer } from "../components/SquareRenderer";




export class ProjectilePool extends ReuseablePool{

    static #instance;
    constructor(){
        super();

    }

    static getInstance() {

        if (this.#instance == null){
            this.#instance = new ProjectilePool();
        }

        return this.#instance;
    }

    makeReuseable(){
        var c = new Composit();
        c.addComponent(new SquareRenderer(10, 10, 'blue'));
        c.addComponent(new MoveDirection());
        Game.instantiate(c);
        return c;
    }

}