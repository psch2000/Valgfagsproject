import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { Component } from "../../base/baseStructor/Component";
import { CircleRenderer } from "../components/CircleRenderer";
import { TowerRange } from "./TowerRange";


export class TowerFacade extends Component{

    #rangeCollider;
    #rangeCircleRenderer;
    #range;
    #rangeComposit;

    #towerCollider;
    #towerCircleRenderer;

    #towerType;

    constructor(towerType, rangeComposit){
        super();
        this.#towerType = towerType;
        this.#rangeComposit = rangeComposit;
    }
   

    onStart(){
        // this.#getComponents();
    }


    #getComponents(){
        this.#rangeCollider = this.#rangeComposit.getComponent(CircleCollider);
        this.#rangeCircleRenderer = this.#rangeComposit.getComponent(CircleRenderer);
        this.#range = this.#rangeComposit.getComponent(TowerRange);

        this.#towerCircleRenderer = this.getComponent(CircleRenderer);
        this.#towerCollider = this.getComponent(CircleCollider);
    }
    
    

    



}