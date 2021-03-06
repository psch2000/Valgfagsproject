import { ReuseablePool } from "../../base/baseConstructors/ReuseablePool";
import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { Composit } from "../../base/baseStructor/Composit";
import { DrawIcon } from "../../base/baseStructor/DrawIcon";
import { instantiate } from "../app/functions/instantiate";
import { Area } from "../components/Area";
import { CircleRenderer } from "../components/CircleRenderer";
import { Tower } from "../tower/Tower";
import { TowerFacade } from "../tower/TowerFacade";
import { TowerPlacere } from "../tower/TowerPlacer";
import { TowerRange } from "../tower/TowerRange";
import { Unplaceable } from "../tower/Unplaceable";

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

    // Makes two composits one that represents the towers range and the other the tower.
    // Returns the tower composit.
    makeReuseable(){
        var towerType = TowerPlacere.getInstance().getTowerType();

        var { radius, color, range, useRotation, imagePath, useArea, areaColor } = towerType;

        var rangeComposit = new Composit("TowerRange");
        rangeComposit.addComponent(new CircleRenderer(range, "#000000CC", true));
        rangeComposit.addComponent(new CircleCollider(range));
        rangeComposit.addComponent(new TowerRange(range));

        var towerComposit = new Composit("TowerComposit");
        //towerComposit.addComponent(new CircleRenderer(radius, color));
        towerComposit.addComponent(new CircleCollider(radius));
        towerComposit.addComponent(new Tower(towerType));
        towerComposit.addComponent(new TowerFacade(towerComposit, rangeComposit));
        towerComposit.addComponent(new Unplaceable());
        if (towerType.useArea) {
            towerComposit.addComponent(new Area(1, towerType.range));
            towerComposit.addComponent(new CircleRenderer(0, areaColor));
        }
        towerComposit.addComponent(new DrawIcon(imagePath, true, useRotation));
        towerComposit.layer = 1;

        instantiate(towerComposit);
        instantiate(rangeComposit);

        return towerComposit;
    }
}