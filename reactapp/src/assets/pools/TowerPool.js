import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { Composit } from "../../base/baseStructor/Composit";
import { Game } from "../app/App";
import { SpriteRenderer } from "../components/SpriteRenderer";


export class TowerPool extends ReuseablePool{

    static #instance;

    constructor(){
        super();
    }


    static getInstance(){

        if  (this.#instance == null)
        {
            this.#instance = new TowerPool();
        }

        return this.#instance;
    }

    makeReuseable(){
        var c = new Composit();
        c.addComponent(new SpriteRenderer());
        Game.instantiate(c);
        return c;
    }
}