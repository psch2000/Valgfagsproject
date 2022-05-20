import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { Component } from "../../base/baseStructor/Component";
import { CircleRenderer } from "../components/CircleRenderer";
import { TowerRange } from "./TowerRange";


export class TowerFacade extends Component{

    #range;
    #rangeComposit;
    #rangeCollider;
    #rangeCircleRenderer;

    #towerCollider;
    #towerCircleRenderer;

    #towerType;

    constructor(towerType, rangeComposit){
        super();
        this.#towerType = towerType;
        this.#rangeComposit = rangeComposit;
        this.range = this.#rangeComposit.getComponent(CircleCollider).radius;
    }
   

    onStart(){
        this.#getComponents();
        this.showRange(false);  
        this.#rangeComposit.transform.position = this.transform.position;
    }

    
    #getComponents(){
        this.#rangeCollider = this.#rangeComposit.getComponent(CircleCollider);
        this.#rangeCircleRenderer = this.#rangeComposit.getComponent(CircleRenderer);
        this.#range = this.#rangeComposit.getComponent(TowerRange);

        this.#towerCircleRenderer = this.getComponent(CircleRenderer);
        this.#towerCollider = this.getComponent(CircleCollider);
    }
    
    canHitEnemy(){
        return this.#range.enemiesInRange.length > 0;
    }

    getEnemiesInRange(){
        return this.#range.enemiesInRange;
    }

    
    showRange(value){    
        this.#rangeCircleRenderer.setActive(value);
    }



}