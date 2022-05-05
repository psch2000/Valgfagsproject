import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { Composit } from "../../base/baseStructor/Composit";
import { instantiate } from "../app/functions/instantiate";
import { CircleRenderer } from "../components/CircleRenderer";
import { Tower } from "../components/Tower";
import { TowerPlacere } from "../components/TowerPlacer";


export class TowerPool extends ReuseablePool{

    static #instance;

    constructor(){
        if (TowerPool.#instance !== undefined) return;
        super();
    }


    static getInstance (){
        if (this.#instance === undefined){
            this.#instance = new TowerPool();
        }

        return this.#instance;
    }

    makeReuseable(){
        var towerType = TowerPlacere.getInstance().getTowerType();

        var c = new Composit("tower");
        c.addComponent(new CircleRenderer(towerType.range, '#030f1191', true));
        c.addComponent(new CircleRenderer(10, towerType.color, false));
        c.addComponent(new Tower(towerType));
        return instantiate(c);
    }
}