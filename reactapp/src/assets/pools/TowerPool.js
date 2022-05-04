import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { Composit } from "../../base/baseStructor/Composit";
import { instantiate } from "../app/functions/instantiate";
import { CircleRenderer } from "../components/CircleRenderer";
import { Tower } from "../components/Tower";
import { TowerPlacere } from "../components/TowerPlacer";


export class TowerPool extends ReuseablePool{

    static #instance;

    constructor(){
        if (TowerPool.#instance != null) return;
        super();
    }


    static getInstance (){
        if (this.#instance == null){
            this.#instance = new TowerPool();
        }

        return this.#instance;
    }

    makeReuseable(){
        var towerType = TowerPlacere.getInstance().getTowerType();

        var c = new Composit();
        c.addComponent(new CircleRenderer(towerType.range, '#030f11', true));
        c.addComponent(new CircleRenderer(10, towerType.color, false));
        c.addComponent(new CircleCollider(towerType.range));
        c.addComponent(new Tower(towerType));
        return instantiate(c);
    }
}